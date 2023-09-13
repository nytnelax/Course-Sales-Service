import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { ForwardedRef, forwardRef, ForwardRefExoticComponent, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import { spawn } from 'child_process';

export const Rating = forwardRef(({ isEditable = false, error,rating, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < currentRating
					})}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<div {...props} ref={ref} className={cn(styles.ratingWrapper, {
			[styles.error]: error
		})}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});