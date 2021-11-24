import React from 'react'
import './FilmGalery.css'
import { Rating } from '@mui/material'
import CardComp from "./card";

export default function FilmGalery({ SearchValue, rating, fakedata }) {
    return (
        <div>
        <ul style={{ listStyle: "none", flexWrap: "wrap", display: "flex" }}>
            {fakedata
            .filter(
                (item) =>
                item.title.toLowerCase().includes(SearchValue.toLowerCase()) &&
                item.rate >= rating
            )
            .map((item) => (
                <CardComp item={item} />
            ))}
        </ul>
        </div>
    );
}
