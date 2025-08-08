import { Link } from 'react-router-dom';
import CardImg1 from '/Home/CollectionCard1.png';
import CardImg2 from '/Home/CollectionCard2.png';

export default function CollectionSection() {
    // This component will display the collection of items
    const collectionItems = [
        { id: 1, name: 'SALE 30% OFF', image: CardImg1 },
        { id: 2, name: 'NEWEST COLLECTION', image: CardImg2 },
    ]

    return (
        <section className='bg-white font-[lato] py-16'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-4xl font-medium font-[montserrat] text-center mb-8'>COLLECTION</h2>
                <div className='grid grid-cols-2 space-x-8 gap-10'>
                    {/* Map through your collection items here */}
                    {collectionItems.map(item => (
                        <div className="relative w-full h-auto" key={item.id}>
                            <img src={item.image} className="w-full h-auto object-cover " alt={item.name} />
                            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                                <Link to="/watches" className=" bg-[#000000] hover:bg-[#D4AF37] hover:text-black rounded-md cursor-pointer md:font-bold font-semibold md:text-lg text-sm text-white border border-transparent md:px-10 px-1 md:py-4 py-2">{item.name}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
