"use client"
import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Dinner')
    const [loading, setLoading] = useState(false)
    const foods = [
        {
            _id: 1,
            image: "https://red-onion-restaurant-41dbe.web.app/assets/Dinner/dinner1.png",
            title: "Baked Chicken",
            description: "Gay one the what walk then she. Demesne mention pr",
            price: "66.99",
            foodType: "Dinner"
        },
        {
            _id: 2,
            image: "https://red-onion-restaurant-41dbe.web.app/assets/Dinner/dinner2.png",
            title: "Lemony Salmaon Piccata",
            description: "Gay one the what walk then she. Demesne mention pr",
            price: "56.99",
            foodType: "Dinner"
        },
        {
            _id: 3,
            image: "https://red-onion-restaurant-41dbe.web.app/assets/Dinner/dinner3.png",
            title: "Garlic Butter Baked Salmon",
            description: "Gay one the what walk then she. Demesne mention pr",
            price: "3.99",
            foodType: "Dinner"
        },
        {
            _id: 4,
            image: "https://red-onion-restaurant-41dbe.web.app/assets/Dinner/dinner4.png",
            title: "French Fried with Cheese",
            description: "Gay one the what walk then she. Demesne mention pr",
            price: "23.99",
            foodType: "Dinner"
        },
        {
            _id: 5,
            image: "https://red-onion-restaurant-41dbe.web.app/assets/Dinner/dinner5.png",
            title: "Pork Tenderion",
            description: "Gay one the what walk then she. Demesne mention pr",
            price: "12.99",
            foodType: "Dinner"
        },
        {
            _id: 6,
            image: "https://red-onion-restaurant-41dbe.web.app/assets/Dinner/dinner6.png",
            title: "Lentil Salad",
            description: "Gay one the what walk then she. Demesne mention pr",
            price: "9.99",
            foodType: "Dinner"
        },

    ]

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    //food menu tab 
    const handleMenuTabs = (type: string) => {
        setMenuTab(type)
    }

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Dinner' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
                <p className={menuTab === 'Breakfast' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.foodType).map(item => (
                    loading ? <Skeleton key={item._id} /> : <FoodItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Foods
