import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../styles/tour.css';

import MyCommonSection from '../shared/MyCommonSection.jsx'
import tourData from '../assets/data/tours.js'
import TourCard from '../shared/TourCard.jsx';
import SearchBar from '../shared/SearchBar.jsx';
import Newsletter from '../shared/Newsletter.jsx';

const Tours = () => {
  
  const [pageCount, setPageCount]=useState(0)
  const [page,setPage] = useState(0)

  useEffect(()=>{
    const pages = Math.ceil(5/4) //later we weill use backend date count
    setPageCount(pages)
  },[])
  return (
    <>
      <MyCommonSection title={'All Tours'}/>
      <section>
        <Container>
          <Row>
              <SearchBar/>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour=>(
                <Col className='mb-4' lg='3' key={tour.id}>
                  <TourCard tour={tour}/>
                </Col>
              ))
            }
            <Col lg='12'>
              <div className="pagination d-flex align-items-center
                justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number=>(
                  <span key={number} onClick={()=> setPage(number)}
                  className= {page===number ? "active__page": ""}
                  >
                    {number+1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Tours
