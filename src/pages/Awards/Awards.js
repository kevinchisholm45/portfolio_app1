import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { AwardItem, InsitutionTitle, AwardTitle } from './styles';

const Awards = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Awards</SectionTitle>
        <ul>
          {user.awards.map((awards, i) => (
            <AwardItem key={i}>
              <AwardTitle>{awards.title}</AwardTitle>
              <div>
                <InsitutionTitle>{awards.awarder}</InsitutionTitle> 
                <br></br>
                <span> <font size="+1">
                    Awarded:  
                  {" " + awards.date} 
                  </font>
                </span>
                
              </div>
              <br></br>
              <a href={awards.summary} target="_blank" rel="noreferrer noopener" >
                  {"Award Information Link"}
              </a>
            </AwardItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Awards;