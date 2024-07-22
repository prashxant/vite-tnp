import React from 'react';
import './Ourteam.css';
import testimonialImage1 from './assets_Ourteam/202202021024.jpeg';
import emailIcon from './assets_Ourteam/gmail-iconnn.png';
import phoneIcon from './assets_Ourteam/instagram-icon.png';
import linkedinIcon from './assets_Ourteam/linkedin photo.png';


const testimonials = [
  {
    name: 'Agile ',
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
  },
  {
    name: 'Student 1',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student1@example.com',
    phone: '111-111-1111',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 2',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student2@example.com',
    phone: '222-222-2222',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 3',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student3@example.com',
    phone: '333-333-3333',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 4',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student4@example.com',
    phone: '444-444-4444',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 5',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student5@example.com',
    phone: '555-555-5555',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 6',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 7',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 8',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 9',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 10',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 11',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  },
  {
    name: 'Student 12',
    text: 'STUDENT CO-ORDINATOR',
    email: 'student6@example.com',
    phone: '666-666-6666',
    image: testimonialImage1,
    className: 'student-box'
  }
];

const Testimonial = ({ name, text, email, phone, image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-details">
        <p className="testimonial-text">{text}</p>
        <h3 className="testimonial-name">- {name}</h3>
        <div className="testimonial-icons">
          <a href={`mailto:${email}`} className="icon-link" aria-label="Email">
            <img src={emailIcon} alt="Email" className="icon-image" />
          </a>
          <a href={`tel:${phone}`} className="icon-link" aria-label="Phone">
            <img src={phoneIcon} alt="Phone" className="icon-image" />
          </a>
          <a href="https://www.linkedin.com" className="icon-link" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="icon-image" />
          </a>
        </div>
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
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <h1 className="heading student-heading">Student Co-ordinators</h1>
      <div className="testimonials-row">
        {testimonials.filter(t => t.className === 'student-box').map((testimonial, index) => (
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
    </div>
  );
};

export default Ourteam;
