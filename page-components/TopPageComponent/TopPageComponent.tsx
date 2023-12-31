import { Advantages, Card,  Htag, P, Product, Sort, Tag } from '@/components';

import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css'
import { HhData } from '@/components/HhData/HhData';
import { SortEnum } from '@/components/Sort/Sort.props';
import { useReducer } from 'react';
import { SortReducer } from './sort.reducer';

export const TopPageComponent = ({page, products, firstCategory}:TopPageComponentProps): JSX.Element=> {
    const [{products: sortedProducts, sort}, dispathSort] = useReducer(SortReducer, {products, sort: SortEnum.Rating});

const setSort = (sort: SortEnum) => {
    dispathSort({type: sort});
};

    const {hh} = page
    console.log(hh)
    return(
   
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag> 
                {products &&<Tag color='grey' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p}/>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag> 
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {hh? (<HhData {...hh}/>) : null}
            
            {page.advantages && page.advantages.length > 0 && <>
            <Htag tag='h2'>Преимущества</Htag>
            <Advantages advantages={page.advantages}/>
            </>
             }

            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
             <Htag tag='h2'>Получаемые навыки</Htag>
             {page.tags.map(t => <Tag key={t} color="ghost">{t}</Tag>)}



        </div>
     
      
    )
};
  