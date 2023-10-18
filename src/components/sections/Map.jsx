import React from 'react'

export const Map = () => {
    return (
        <div style={{ width: '100%', height: '450px', position: 'relative' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26064.259946946966!2d-123.12158700775956!3d49.28260511373467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94e4f%3A0xa73e74546586f2b0!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sin!4v1645431023130!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    )
}
