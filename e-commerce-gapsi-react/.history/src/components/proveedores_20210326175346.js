import React from 'react';  
import {  
    Row,  
    Col,  
    Container  
} from 'react-bootstrap';  
import Axios from 'axios';
import 'bootstrap/dist/js/bootstrap/'  
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';  
import ProveedorPagination from './paginacionProveedor';  
import 'bootstrap/dist/css/bootstrap.css';  
const apiUrl = "http://localhost:9001/proveedores";  
class ProveedorList extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            error: null,  
            response: {},  
            CurrentPage: 1,  
            data: [],  
            filter: {  
                pageNo: 1,  
                sizePerPage: 5,  
            },  
            totalCount: 0,  
        }  
    }  
    componentDidMount() {  
        this.bindData();  
    }  
    bindData() {  
        let {  
            pageNo  
        } = this.state.filter;  
        Axios.get(apiUrl + `/GetEmpDetails?pageNo=${pageNo}`).then(response => response.data).then(  
            (result) => {  
                this.setState({  
                    data: result.employees,  
                    totalCount: result.TotalCount  
                });  
            },  
            (error) => {  
                this.setState({  
                    error  
                });  
            })  
    }  
    onPageHandler = async (type, {  
        page  
    }) => {  
        let data = page  
        let {  
            filter  
        } = this.state;  
        let tempFilter = {  
            ...filter  
        };  
        tempFilter["pageNo"] = data;  
        await this.setState({  
            filter: tempFilter  
        })  
        this.bindData()  
    }  
    render() {  
        //Column Style  
        const colStyle = {  
            backgroundColor: '#002b48',  
            color: "#ffffff",  
            width: '60px'  
        }  
        //Generate column  
        const columns = [{  
            dataField: 'Id',  
            text: 'Id',  
            headerStyle: colStyle  
        }, {  
            dataField: 'Nombre',  
            text: 'Nombre',  
            headerStyle: colStyle  
        }, {  
            dataField: 'Razon-Social',  
            text: 'Razon Social',  
            headerStyle: colStyle  
        }, {  
            dataField: 'Direccion',  
            text: 'Direccion',  
            headerStyle: colStyle  
        }, {  
            dataField: 'Fecha',  
            text: 'Fecha',  
            headerStyle: colStyle  
        }]; 
        const {  
            filter,  
            data  
        } = this.state;  
        return ( < React.Fragment > < Container > < Row > < Col > < h2 > Pagination Demo in React < /h2></Col > < /Row> < hr > < /hr> < Row > < Col xs = {  
                3  
            } > < /Col> < Col xs = {  
                6  
            } > < ProveedorPagination data = {  
                data  
            }  
            page = {  
                filter.pageNo  
            }  
            sizePerPage = {  
                filter.sizePerPage || 5  
            }  
            totalSize = {  
                this.state.totalCount  
            }  
            onTableChange = {  
                this.onPageHandler  
            }  
            columns = {  
                columns  
            }  
            /> < /Col> < Col xs = {  
                3  
            } > < /Col> < /Row> < /Container> < /React.Fragment>)  
    }  
}  
export default ProveedorList;  ;
