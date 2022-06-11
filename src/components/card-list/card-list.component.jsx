import { Component } from 'react';

class CardList extends Component {

render() {
    console.log('cardList called');
    const { monsters } = this.props;

    return (
        <div>
            {
                monsters.map( el => (
                    <div className='card-list' key={el.id}>
                        <img 
                            src={`https://robohash.org/${el.id}?set=set1&size=180x180`}
                            alt={`monster ${el.name}`} />
                        <h2>{el.name}</h2>
                        <p>{el.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

}

export default CardList;