import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import './styles.css'
import details from '../data/bird_details.json'

import { Input, Select, Card, Row, Col, Button } from 'antd';
import SkeletonImage from "antd/lib/skeleton/Image";
const { Option } = Select;

const images = {
    logos: {
      blujay: require('../images/bluejay.jpeg').default,
      amerob: require('../images/amerob.jpeg').default,
      moudov: require('../images/moudov.jpeg').default,
      norcar: require('../images/norcar.jpeg').default,
      houspa: require('../images/houspa.jpeg').default,
      empty: require('../images/empty.webp').default
    }
  };

export const BirdCall = () => {

    const [ output, setOutput ] = useState();
    const [ birdDetails, setBirdDetails ] = useState({});
    const [ receivedResponse, setReceivedResponse ] = useState(false);
    const [ filename, setFilename ] = useState("None")

    const upload = (file) => {
        fetch('http://e6a4-35-221-218-113.ngrok.io', { // Your POST endpoint
          method: 'POST',
          headers: {
          },
          body: file
        }).then(response =>  response.json())
        .then(resData => { 
            setOutput(resData.predictions)
            fetchBirdDetails(resData.predictions)
            setReceivedResponse(true)
        }
        ).catch(
          error => console.log(error)
        );
      };
    
    const handleFileUpload = (event) => {
        let file = event.target.files[0];
        setFilename(file.name);
        let formData = new FormData();
        formData.append("file", file);
        upload(formData);
    }

    const fetchBirdDetails = (name) => {
        debugger
        details.map(item => {
            if(item.id == name) {
                setBirdDetails(item)
                
            }
        })
        
    }
    console.log(details);
    
    return (
        <div style={{ margin: "5% 2% 5% 2%" }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Upload an audio file" bordered={true} style={{ marginTop: "30%", height: "50%", width: "100%", color: "#040341"}}>
                        
                        <div class="file-input">
                            <input type="file" id="file" class="file" name="file" onChange={handleFileUpload}/>
                            <label for="file">Select file</label>
                        </div>
                        <div style={{ marginTop: "10%" }}>File chosen: {filename}</div>
                    </Card>
                </Col>
                <Col span={16}>
                    {!receivedResponse && 
                    <>
                        <img src={images.logos.empty} height="90%" />
                        <h2 style={{ color: "white", marginTop: "1%" }}>Upload an audio file to identify and fetch bird details</h2>
                    </>
                    }
                    {!!birdDetails && Object.keys(birdDetails).length > 0 &&
                    <>
                    <>
                    <h2 style={{ color: "white" }}>{birdDetails.name}</h2>
                    <img src={images.logos[birdDetails.id]} width="70%" height="70%" />
                    <div>
                    {birdDetails.description}
                    </div>
                    </>
                    </>
                    }
                </Col>
            </Row>
        </div>
    )
}