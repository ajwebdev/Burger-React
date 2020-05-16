import React ,{Component}from 'react';
import Aux from '../Auxilary/Auxilary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
           this.reqInterceptor = axios.interceptors.request.use(req=>{
                // w
                this.setState({error:null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res=>res,error=>{

                this.setState({error:error});
            });
            
        }
        componentWillUnmount(){
         
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () =>{
            this.setState({error:null})
        }
        render(){
            return (
                <div>
                    <Aux>
                        <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                           {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </Aux>
                </div>
            )
        }

    }
}

export default withErrorHandler;
