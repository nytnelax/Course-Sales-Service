import { Button, Tag, P, Htag, Rating, Input } from "@/components";
import { withLayout } from '../layout/layout'
import { FunctionComponent, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interfaces";





function Home({menu, firstCategory}:HomeProps): JSX.Element {
  const[rating, setRating] = useState<number>(4);


  return (
      <>
        
      <Input placeholder='fdsfsdfsda'/>
      </>
    );

  }
  
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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