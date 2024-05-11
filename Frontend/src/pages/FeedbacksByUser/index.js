import React, { useState, useEffect } from "react";
import { Card, Row, Col, Select, Button, Rate,message } from "antd";
import { DeleteFeedbackDetails, GetFeedbackDetails } from "../../apicalls/feedback";
import FeedbackForm from "./feedbacksForm";
import AppFooter from '../Footer';
import AppHeader from '../Header';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Option } = Select;


const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [openFeedbackForm, setOpenFeedbackForm] = React.useState(false);
    const [feedbackToUpdate, setFeedbackToUpdate] = useState(null);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await GetFeedbackDetails("lakithadilshan08@gmail.com");
                setFeedbacks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeedbacks();
    }, [refresh, feedbacks]);

    const handleFilterChange = (value) => {
        setSelectedFilter(value);
    };

    const handleFeedbackUpdate = () => {
        setRefresh(!refresh);
    };

    const handleFeedbackDelete = async (feedbackId) => {
        try {
            await DeleteFeedbackDetails(feedbackId);
            message.success('Feedback successfully deleted!');
            setRefresh(!refresh);
        } catch (error) {
            console.error(error);
            message.error('Failed to delete feedback. Please try again.');
        }
    };
    

    const filteredFeedbacks = selectedFilter === "All" ? feedbacks : feedbacks.filter((feedback) => feedback.filterOption === selectedFilter);


    return (
        <> 
         <AppHeader></AppHeader>
         <div style={{ padding: '20px', background: '#fff' }}></div>
        <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Feedbacks </h2>
        
        <hr />
        <div className='authentication-form bg-white p-1' style={{ marginTop: '20px' }}>
        <h6 style={{ fontSize: '18px', fontWeight: 'bold',textAlign: 'center' }}>filter Package</h6>
        <Link to="/feedback">
        <Button
         type="primary"
         style={{ position: 'absolute', top: 0, right: 0, marginTop: '100px', marginRight: '20px', backgroundColor: 'purple' }}
         >
         Create Feedback
        </Button>
        </Link>
        </div>
        <Select defaultValue="All" style={{ width: 200 ,display: 'block', margin: '0 auto', marginBottom: '20px'}} onChange={handleFilterChange}>
            <Option value="All">All</Option>
            <Option value="Kids & Family">Kids & Family</Option>
            <Option value="Leisure">Leisure</Option>
            <Option value="Foodie">Foodie</Option>
            <Option value="Shoppers">Shoppers</Option>
        </Select><Row key={JSON.stringify(feedbacks)} gutter={[16, 16]}>
                {filteredFeedbacks.map((feedback) => (
                    <Col key={feedback._id} xs={24} sm={12} md={8} lg={6}>
                        <Card style={{backgroundColor:'#E6E6FA'}}>
                            <p>Name: {feedback.name} </p>
                            {/* <p>Email: {feedback.email}</p> */}
                            <p>: {feedback.filterOption}</p>
                            <Rate defaultValue={feedback.rate} disabled />
                            <p>Feedback: {feedback.text}</p>

                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <Button title='Update'
                                            onClick={() => {
                                                setOpenFeedbackForm(true);
                                                setFeedbackToUpdate(feedback);
                                            }}
                                            icon={<EditOutlined />} />
                                           
                                            
                                    </div>
                                    <div>
                                        <Button title='Delete' 
                                            onClick={() => {
                                                DeleteFeedbackDetails(feedback._id);
                                                handleFeedbackDelete();
                                            }}
                                            type="danger" icon={<DeleteOutlined />}/>
                                       
                                    </div>
                                </div>

                                {openFeedbackForm && <FeedbackForm open={openFeedbackForm} setOpen={setOpenFeedbackForm} feedback={feedbackToUpdate} onFeedbackUpdate={handleFeedbackUpdate} />}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <br></br>
            <AppFooter />
            
            </>
    );
};

export default FeedbackList;
