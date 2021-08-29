import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FooterLinks = () => {
    const [results, setResults] = useState({});

    const getContact = async () => {
        const res = await fetch('/api/contact')
        const json = await res.json()
        setResults(json.data)
    }

    useEffect(() => {
        getContact()
    }, [])

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {<Marker position={ { lat: -34.397, lng: 150.644 }} onClick={()=> {console.log('111111111')}} />}
            {<Marker position={ { lat: -34.397, lng: 140.644 }} onClick={()=> {console.log('22222222')}}/>}
        </GoogleMap>
    ))
    return (
        <div className="ps-footer__links">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="contact">
                            <ul>
                                <li>
                                    <div className="circle">
                                        <i class="icon-telephone" aria-hidden="true"></i>
                                    </div>
                                    <p>{results.phone}</p>
                                </li>
                                <li>    
                                    <div className="circle">
                                        <i class="icon-envelope" aria-hidden="true"></i>
                                    </div>
                                    <p>{results.receive_email}</p>
                                </li>
                                <li>
                                    <div className="circle">
                                        <i class="icon-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <p>{results.address}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `200px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterLinks;
