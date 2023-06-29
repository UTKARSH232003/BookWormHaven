import React from 'react'
import Card from './Card'

export default function AllCards() {
  return (
    <div>
        <h1 className="text-center"> 
          BestSeller in Books
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card title="The Girl Who Kicked the Hornet's Nest" url = "https://m.media-amazon.com/images/I/81W7LuFZHvL.jpg" authors="Stieg Larsson"/>
            </div>
            <div className="col-md-4">
              <Card title="The Girl Who Kicked the Hornet's Nest" url = "https://m.media-amazon.com/images/I/81W7LuFZHvL.jpg" authors="Stieg Larsson"/>
            </div>
            <div className="col-md-4">
              <Card title="The Girl Who Kicked the Hornet's Nest" url = "https://m.media-amazon.com/images/I/81W7LuFZHvL.jpg" authors="Stieg Larsson"/>
            </div>
          </div>
        </div>
    </div>
  )
}
