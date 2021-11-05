import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../mainLayout';
import Heading from '../../components/Heading';
import { dataList, dataBox, dataMebo } from '../../constants/mockData';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Images from '../../assets/images/banner01.jpg';

Home.propTypes = {

};

function Home(props) {
  let history = useHistory();
  const renderData = dataList && dataList.length > 0 && dataList.map((item) => {
    return (
      <Col xl={3}>
        <div className="wrapper-box">
          <div className="icon mb-3">
            <img src={item.img} alt="" />
          </div>
          <div className="title">
            <h3>{item.title}</h3>
          </div>
          <div className="content">
            {item.content}
          </div>
        </div>
      </Col>
    )
  })
  const renderDataBox = dataBox && dataBox.length > 0 && dataBox.map((item) => {
    return (
      <Col xl={3}>
        <div className="render-box">
          <h3>{item.title1}</h3>
          <h3>{item.content1}</h3>
        </div>
      </Col>
    )
  })
  const renderDataMebo = dataMebo && dataMebo.length > 0 && dataMebo.map((item) => {
    return (
      <Col xl={4}>
        <div className="wrapper-box">
          <div className="icon mb-3">
            <img src={item.img1} alt="" />
          </div>
        </div>
      </Col>
    )
  })
  const handleButton = () => {
    history.push('/')
  }


  return (
    <MainLayout>
      <Heading title1="BẠN ĐANG CẦN MEBO TRIỂN KHAI DỊCH VỤ NÀO?" />
      <section className="main-box mt-5">
        <Container>
          <Row>
            {renderData}
            <Button onClick={() => { handleButton() }}>Tư vấn nhanh miễn phí</Button>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Heading
            title1="VÌ SAO BẠN CẦN MEBO?"
            title2="xây dựng nhận diện thương hiệu"
            isSub />
          <div>
            <Row>
              <Col xl={6}>
                <div className="wrapper-box">
                  <div className="title">
                    <div>MEBO tự hào là đơn vị thiết kế trẻ trung với ý tưởng mới, táo bạo. Dám thực hiện những điều khác biệt nhất với quyết tâm cao nhất vì mục tiêu tạo ra sản phẩm chất lượng và riêng biệt cho từng khách hàng.</div>
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <div className="icon mb-3">
                  <img src={Images} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Row>
          {renderDataBox}
        </Row>
      </section>

      <section>
        <Container>
          <Row>
            {renderDataMebo}
          </Row>
        </Container>
      </section>
    </MainLayout>
  );
}

export default Home;