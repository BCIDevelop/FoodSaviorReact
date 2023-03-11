import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ListCategory from './ListCategory'
import UpdateCategory from './UpdateCategory'
import { getCategories } from '../../globalServices/categories.service'
import { CategoryModel } from '../../model/CategoryModel'
import CreateCategory from './CreateCategory'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
const CRUDCategory = () => {
  const { action } = useParams();
  const { id } = useParams();
  const [ data, setData ] = useState( [] );
  const {showToast}= useContext(AlertContext)
  const {user,removeUser}=useContext(UserContext)
  // if( localStorage.getItem('categories') === null){ localStorage.setItem( 'categories', JSON.stringify(CategoryModel()) );}
  // const data = JSON.parse(localStorage.getItem('categories'));

  async function processGetCategories(){
    const response = await getCategories(history,showToast,removeUser);
    // data = response.results;
    setData( response.results )
    // console.log( response );
    // toogleLoader();
    // setCategoriesDB( response.results );
  }
  useEffect(()=>{
      processGetCategories();
  },[])

  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateCategory data={data} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : 0,
      name : "",
      favorite: 0,
    };
    component = <CreateCategory data={newForm} />
  }else{
    component = <ListCategory data={data} /> 
  }

  return (
    <div className="bodyWroduct">
      {component}
    </div>
  )
}

export default CRUDCategory
