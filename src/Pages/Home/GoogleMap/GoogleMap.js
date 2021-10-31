import React from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
    return (
        <div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634240.2183514264!2d-1.2372005106686335!3d51.61403382811051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab0b37f739%3A0x7880ba51ff73cff8!2sTripAdvisor!5e0!3m2!1sen!2sbd!4v1635688694830!5m2!1sen!2sbd" ></iframe>
        </div>
    );
};

export default GoogleMap;