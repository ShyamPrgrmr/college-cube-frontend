import React,{Component} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class ImageUploader extends Component {
    constructor(props){
        super(props);
    }

    state={
        files:null,
        server:"http://localhost:8080/"
    };

    onUpload=async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        const cookies = new Cookies();
        const token = cookies.get("token");
   
        formData.append(
            "file",
            this.state.files,
            this.state.files.name
        );

        formData.append("token",token);

        let data = await axios.post(this.state.server+"admin/addproductimage", formData);

        this.props.onNewImgAdd(data.data);

    }

    onChange=(e)=>{
        this.setState({files:e.target.files[0]});
    }

    render(){
        return(
            <>
                <label>Upload Image</label>
                <div class="input-group">
                    <input type="file" class="form-control" placeholder="Upload Image" onChange={this.onChange}/>
                    <div class="input-group-append">
                        <button onClick={this.onUpload} class="btn btn-sm btn-primary" type="button">Upload</button>
                    </div>
                </div>
            </>
        );
    }
}