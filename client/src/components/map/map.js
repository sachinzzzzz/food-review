import React from 'react';

const Map = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11073.810551741044!2d84.89671760254292!3d22.254444041086423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfood%20near%20me!5e0!3m2!1sen!2sin!4v1722872899553!5m2!1sen!2sin"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default Map;
