import './AddProduct.css';
import React,{Component} from 'react';

export default class AddProduct extends Component{
  
  state={
    reloads:1
  };

  constructor(props) {
    super(props);
  }

  componentDidMount=()=>{
  }


  render(){
      return( <>     
        <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Add Product</h4>
            
            <form class="forms-sample">
              <div class="form-group">
                <label for="exampleInputName1">Name</label>
                <input type="text" class="form-control" id="exampleInputName1" placeholder="Name of product"/>
              </div>
              
              
              
            <div class="form-group">
                <label for="exampleSelectGender">Measurement</label>
                  <select class="form-control">
                    <option>Kilo Grams</option>
                    <option>Litres</option>
                    <option>Grams</option>
                    <option>Pieces</option>
                  </select>
            </div>

              <div class="form-group">
                <label>Image upload 1</label>
                <input type="file" name="img[]" class="file-upload-default"/>
                <div class="input-group col-xs-12">
                  <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                  <span class="input-group-append">
                    <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label>Image upload 2</label>
                <input type="file" name="img[]" class="file-upload-default"/>
                <div class="input-group col-xs-12">
                  <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                  <span class="input-group-append">
                    <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label>Image upload 3</label>
                <input type="file" name="img[]" class="file-upload-default"/>
                <div class="input-group col-xs-12">
                  <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                  <span class="input-group-append">
                    <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                  </span>
                </div>
              </div>

              
              <div class="form-group">
                <label for="exampleInputCity1">Manufacturer</label>
                <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location"/>
              </div>
              
              <div class="form-group">
                <label for="exampleInputEmail3">Description</label>
                <textarea type="email" class="form-control" id="exampleInputEmail3" placeholder="Product description"></textarea>
              </div>


              <button type="submit" class="btn btn-primary mr-2">Submit</button>
              <button class="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
      </>
      );
  }
}
