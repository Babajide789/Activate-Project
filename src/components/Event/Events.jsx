import { useCreateTicketMutation } from '../feature/eventslice/eventApiSlice';
import { useState } from 'react';

import "./Events.css"

import React from 'react'
import Nav from '../nav-folder/Nav';

const Events = () => {
  
    const [addTicket] = useCreateTicketMutation();
    const [ticketData, setTicketData] = useState({
      name: '',
      email: '',
      ticket_type: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Validate form data
      if (
        ticketData.name.trim() &&
        ticketData.email.trim() &&
        ticketData.ticket_type.trim()
      ) {
        try {
          await addTicket(ticketData);
          // Show success alert
          window.alert("Your ticket would be sent to your email shortly. Thank you!");
          
          // Reset form data
          setTicketData({
            name: "",
            email: "",
            ticket_type: "",
          });
        } catch (error) {
          // Handle errors here if needed
          console.error("Error adding ticket:", error);
        }
      } else {
        // Show an error alert if fields are empty
        window.alert("Please fill out all fields before submitting.");
      }
    };
    
  return (
    <div>
      <div className="faq-container-faq">
        <Nav/>

        <div className="section-head">
          <h4>Events</h4>
        </div>
      </div>

      <div className="form-event">
        <form onSubmit={handleSubmit}>
          <div className="eventdv">
            <div className="name">
              Name:
              <input
                className="pad"
                type="text"
                placeholder="Enter your name"
                value={ticketData.name}
                onChange={(e) =>
                  setTicketData({ ...ticketData, name: e.target.value })
                }
              />
            </div>

            <div className="email">
              E-mail:
              <input
                className="pad"
                type="email"
                placeholder="Enter your Email"
                value={ticketData.email}
                onChange={(e) =>
                  setTicketData({ ...ticketData, email: e.target.value })
                }
              />
            </div>

            <div className="ticket-type">
              <label>Ticket Type:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="ticketType"
                    value="Regular"
                    checked={ticketData.ticket_type === "Regular"}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, ticket_type: e.target.value })
                    }
                  />
                  Regular
                </label>
                <label>
                  <input
                    type="radio"
                    name="ticketType"
                    value="VIP"
                    checked={ticketData.ticket_type === "VIP"}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, ticket_type: e.target.value })
                    }
                  />
                  VIP
                </label>
                <label>
                  <input
                    type="radio"
                    name="ticketType"
                    value="Tables"
                    checked={ticketData.ticket_type === "Tables"}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, ticket_type: e.target.value })
                    }
                  />
                  Tables
                </label>
                <label>
                  <input
                    type="radio"
                    name="ticketType"
                    value="Backstage pass"
                    checked={ticketData.ticket_type === "Backstage pass"}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, ticket_type: e.target.value })
                    }
                  />
                  Backstage Pass
                </label>
              </div>
            </div>

            <button type="submit">
              {isEditing ? 'Update Ticket' : 'Get Ticket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Events;
