import React from 'react';
import { Input, Button } from 'antd';
import AppFooter from '../Footer';
import AppHeader from '../Header';

// Assuming the image is correctly imported as shoppingPageWall
import shoppingPageWall from '../../images/shopping/shoppingBack.jpg';

const ShoppingPage = () => {
    return (
        <div>
            <AppHeader />
            <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                <div style={{
                    backgroundImage: `url(${shoppingPageWall})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '590px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    textShadow: '0px 0px 8px rgba(0.5, 0.5, 0.5, 0.5)'
                }}>
                    <h1 style={{
                        fontFamily: '"Times New Roman", Times, serif',
                        fontSize: '200px',
                        margin: '50px 0', // Adjusted margin to move the title up
                        padding: '200px', // Reduced padding
                        color: 'rgba(255, 255, 255, 0.7)' // Reduced color intensity
                    }}>
                        SHOPPING
                    </h1>
                    <div style={{
                        width: '85%',
                        color: 'black', // Changed paragraph text color to black
                        padding: '1px',
                        borderRadius: '10px',
                        fontSize: '16px',
                        textAlign: 'center'                   
                        }}>
                        <p>
                            Discover everything you desire right here, from renowned jewelry labels, cool local brands,
                            and exquisite food hall to engaging events. For children, find exciting toys, buzz-worthy gifts to stylish
                            locations from dining pavilions to relaxing retreats in beauty, metro, perfect for unwinding and pampering.
                        </p>
                        <div style={{ border: '1px solid #ccc', padding: '50px', marginTop: '20px' }}>
                            <h2>Find Shops Here</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                <Button type="primary">Button 1</Button>
                                <Button type="primary">Button 2</Button>
                                <Button type="primary">Button 3</Button>
                                <Button type="primary">Button 4</Button>
                            </div>
                            <Input.Search style={{ marginTop: '20px' }} placeholder="Search shops" />
                        </div>
                    </div>
                </div>
                <div style={{
                    padding: '100px', // Reduced padding significantly to move up the levels and search bar
                    textAlign: 'center'
                }}>
                    {/* Content */}
                </div>
            </div>
            <AppFooter />
        </div>
    );
};

export default ShoppingPage;
