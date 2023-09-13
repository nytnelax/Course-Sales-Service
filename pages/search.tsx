import { Button, Tag, P, Htag, Rating } from "@/components";
import { withLayout } from '../layout/layout'
import { FunctionComponent, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interfaces";
import { API } from "@/helpers/api";





function Search(): JSX.Element {
  return (
      <>
      
      </>
    );

  }
  
export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props:{
      menu,
      firstCategory

    }
  };

};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number; 

}