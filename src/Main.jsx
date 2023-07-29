import { MDBTableBody, MDBTableHead, MDBBadge, MDBRow, MDBCol, MDBContainer, MDBIcon, MDBTable, MDBCard, MDBTooltip } from 'mdb-react-ui-kit'
import React from 'react'
import './Main.css';
import img1 from './images/avatar-1.png';
import img2 from './images/avatar-2.png';
import img3 from './images/avatar-3.png';
import img4 from './images/avatar-4.png';
import img5 from './images/avatar-5.png';
import img6 from './images/avatar-6.png';
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

// import { Scrollbars } from "react-scrollbars";

function Main() {
  return (
    <MDBRow className='justify-content'>
      <MDBCol>
        <MDBContainer>
          <MDBCard className='masking'>
          <div className='table'>
      <div className='title'>
      <h2> <FaTasks className='task' /> Task List</h2>
      <hr></hr>
    </div>
    {/* <Scrollbars> */}
    <MDBTable className='main-table'><MDBTableHead>
        <tr>
          <th>Team Member</th>
          <th>Task</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th>
            <img className='img' src={img1} alt='avatar 1' width={45}></img>
            <span className='name'>Alice Mayer</span>
          </th>
          <td>
            Call Sam For Payments
          </td>
          <td>
            <h6>
              <MDBBadge className='danger' color='danger'>
                High priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img className='img' src={img2} alt='avatar 2' width={45}></img>
            <span className='name'>Kate Moss</span>
          </th>
          <td className='text-center'>
            Make payment to Bluedart
          </td>
          <td>
            <h6>
              <MDBBadge className='success' color="success">
                Low priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img className='img' src={img3} alt='avatar 3' width={45}></img>
            <span className='name'>Danny McChain</span>
          </th>
          <td className='text-center'>
            Office rent
          </td>
          <td>
            <h6>
              <MDBBadge className='warning' color="warning">
                Middle priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img className='img' src={img4} alt='avatar 4' width={45}></img>
            <span className='name'>Alexa Chung</span>
          </th>
          <td className='text-center'>
            Office grocery shopping
          </td>
          <td>
            <h6>
              <MDBBadge className='danger' color="danger">
                High priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img className='img' src={img5} alt='avatar 5' width={45}></img>
            <span className='name'>Ben Smith</span>
          </th>
          <td className='text-center'>
            Ask for Lunch to Clients
          </td>
          <td>
            <h6>
              <MDBBadge className='success' color='success'>
                Low priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img className='img' src={img6} alt='avatar 6' width={45}></img>
            <span className='name'>Annie Hall</span>
          </th>
          <td className='text-center'>
            Create weekly tasks plan
          </td>
          <td>
            <h6>
              <MDBBadge className='warning' color="warning">
                Medium priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
      </MDBTableBody>
      </MDBTable>
      {/* </Scrollbars> */}
      </div>
      <button type='submit' className='cancel'>CANCEL</button>
      <button type='submit' className='add-task'>ADD TASK</button>
      </MDBCard>
      </MDBContainer>
      </MDBCol>
      </MDBRow>
  )
}

export default Main