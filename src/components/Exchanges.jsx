import React from 'react';
import millify from 'millify';
import { Row, Col} from 'antd';

import { useGetExchangesQuery } from '../services/exchanges';
import Loader from './Loader';
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data;
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={2}><b>Rank</b></Col>
        <Col span={6}><b>Exchanges</b></Col>
        <Col span={6}><b>Money Volume (USD)</b></Col>
        <Col span={6}><b>Website</b></Col>
      </Row>

        <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>          
              <Row >
                    <Col span={2}>{exchange.RankByExchangeVolume}</Col>
                    <Col span={6}>{exchange.Name}</Col>
                    <Col span={6}>{millify(Number(exchange.VolUSD), {precision: 3})}</Col>
                    <Col span={6}><a href={exchange.Website} target="_blank" rel="noreferrer">{exchange.Website}</a></Col>
                  </Row>
          </Col>
        ))} 
      </Row> 
    </>
  );
};

export default Exchanges;
