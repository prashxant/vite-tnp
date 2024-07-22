import React from 'react';
import './Ourteam.css';
import testimonialImage1 from './assets_Ourteam/202202021024.jpeg'; 

const testimonials = [
  {
    name: 'Agile Rendi',
    text: 'TRAINING & PLACEMENT OFFICER | FACULTY MEMBER (ECE)',
    email: 'agile@example.com',
    phone: '000000-000000',
    image: testimonialImage1,
    className: 'prominent-box' 
  },
  {
    name: 'MR. BIKRAMJIT CHOUDHARY',
    text: 'FACULTY MEMBER(CSE)',
    email: 'xxxxxxx@example.com',
    phone: '111-222-3333',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'DR. BHASKAR SAHA',
    text: 'FACULTY MEMBER(MCD)',
    email: 'john.smith@example.com',
    phone: '444-555-6666',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'SHAFI KAMAL RAHMAN',
    text: 'FACULTY MEMBER(CE)',
    email: 'emily.davis@example.com',
    phone: '777-888-9999',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'DR. RAJESH KONDAREDDY',
    text: 'FACULTY MEMBER(IE)',
    email: 'michael.brown@example.com',
    phone: '000-111-2222',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'MR. ABHIJIT DAS',
    text: 'FACULTY MEMBER(FET)',
    email: 'sarah.wilson@example.com',
    phone: '333-444-5555',
    image: testimonialImage1,
    className: 'testimonial'
  }
];

const studentCoordinators = [
  {
    name: 'NABADEEP KR. DAS',
    text: 'Student Co-ordinator (CS)',
    email: 'john.doe@example.com',
    phone: '999-888-7777',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'Jane Smith',
    text: 'Student Co-ordinator (ECE)',
    email: 'jane.smith@example.com',
    phone: '888-777-6666',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'Sam DA',
    text: 'Student Co-ordinator (MCD)',
    email: 'sam.brown@example.com',
    phone: '777-666-5555',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'Alice ',
    text: 'Student Co-ordinator (CE)',
    email: 'alice.johnson@example.com',
    phone: '666-555-4444',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: ' Lee',
    text: 'Student Co-ordinator (EE)',
    email: 'bob.lee@example.com',
    phone: '555-444-3333',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'JAHNAVI',
    text: 'Student Co-ordinator (CSE)',
    email: 'mary.green@example.com',
    phone: '444-333-2222',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'PeTER ',
    text: 'Student Co-ordinator (ECE)',
    email: 'peter.parker@example.com',
    phone: '999-888-7777',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'XNXX',
    text: 'Student Co-ordinator (ECE)',
    email: 'clark.kent@example.com',
    phone: '888-777-6666',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'MRNMOY',
    text: 'Student Co-ordinator (MCD)',
    email: 'bruce.wayne@example.com',
    phone: '777-666-5555',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'Dikshit KALOTA',
    text: 'Student Co-ordinator (CE)',
    email: 'diana.prince@example.com',
    phone: '666-555-4444',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: ' Allen Sarma',
    text: 'Student Co-ordinator (ECE)',
    email: 'barry.allen@example.com',
    phone: '555-444-3333',
    image: testimonialImage1,
    className: 'testimonial'
  },
  {
    name: 'HAREN DAS',
    text: 'Student Co-ordinator (FET)',
    email: 'xxxxxxx@example.com',
    phone: '444-333-2222',
    image: testimonialImage1,
    className: 'testimonial'
  }
];

const Testimonial = ({ name, text, email, phone, image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-details">
        <p className="testimonial-text">{text}</p>
        <h3 className="testimonial-name">- {name}</h3>
        <p className="testimonial-email">Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p className="testimonial-phone">Phone: {phone}</p>
      </div>
    </div>
  );
};

const Ourteam = () => {
  return (
    <div className="Ourteam">
      <h1 className="heading">TPO & Faculty Members</h1>
      
      <div className="testimonials-page">
        {testimonials.filter(t => t.className === 'prominent-box').map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            email={testimonial.email}
            phone={testimonial.phone}
            image={testimonial.image}
            className={testimonial.className}
          />
        ))}
      </div>
      <div className="testimonials-row">
        {testimonials.filter(t => t.className === 'testimonial').map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            email={testimonial.email}
            phone={testimonial.phone}
            image={testimonial.image}
            className={testimonial.className}
          />
        ))}
      </div>
      <br /><br /><br />
      <br />      
      <h1 className="heading student-heading">Student Co-ordinators</h1>
      <br /> <br />
      <br /> <br />
      <br /> 
      <div className="testimonials-row">
        {studentCoordinators.map((coordinator, index) => (
          <Testimonial
            key={index}
            name={coordinator.name}
            text={coordinator.text}
            email={coordinator.email}
            phone={coordinator.phone}
            image={coordinator.image}
            className={coordinator.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
