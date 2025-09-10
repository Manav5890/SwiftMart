import React from 'react'
import style from "./homeDefault.module.css"
import SideBar from '../sidebar/SideBar'
import ProductContainer from '../Productcontainer/ProductContainer'
const HomeDefault = () => {
  return (
    <section className={style["homechilds"]}>
    <SideBar/>
   <ProductContainer/>
  </section>
  )
}

export default HomeDefault