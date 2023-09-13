import CoursesIcon from './icons/courses.svg';
import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { FirstLevelMenuItem } from '@/interfaces/menu.interfaces';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    {route: 'сloud', name: 'Сервисы', icon: <CloudIcon/>, id: TopLevelCategory.Services },
    {route: 'book', name: 'Книги', icon: <BookIcon/>, id: TopLevelCategory.Books },
    {route: 'box', name: 'Продукты', icon: <BoxIcon/>, id: TopLevelCategory.Products }
  ];


export const priceRu = (price: number):string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,  ' ').concat(' ₽');

export const devlOfNum = (number: number,  titles: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}