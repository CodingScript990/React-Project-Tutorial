import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = 
[
  {
    "id": 1,
    "image": 'https://placeimg.com/80/80/any/1',
    "name": '블랙 위도우',
    "birthday": '960421',
    "gender": '여자',
    "title": '어둠의 망자',
    "job": '셀러리맨(히어로)'
  },
  {
    "id": 2,
    "image": 'https://placeimg.com/80/80/any/2',
    "name": '캣우먼',
    "birthday": '950110',
    "gender": '여자',
    "title": '블랙캣',
    "job": '비서(히어로)'
  },
  {
    "id": 3,
    "image": 'https://placeimg.com/80/80/any/3',
    "name": '할리 퀸즈',
    "birthday": '970512',
    "gender": '여자',
    "title": '미치광이',
    "job": '백수(히어로)'
  },
  {
    "id": 4,
    "image": 'https://placeimg.com/80/80/any/4',
    "name": '토르',
    "birthday": '931102',
    "gender": '남자',
    "title": '파괴의 신',
    "job": '천둥군주(히어로)'
  },
  {
    "id": 5,
    "image": 'https://placeimg.com/80/80/any/5',
    "name": '아이언맨',
    "birthday": '930501',
    "gender": '남자',
    "title": '로봇맨',
    "job": '셀러리맨(히어로)'
  },
  {
    "id": 6,
    "image": 'https://placeimg.com/80/80/any/6',
    "name": '캡틴 아메리칸',
    "birthday": '950424',
    "gender": '남자',
    "title": '어깨깡패',
    "job": '군인(히어로)'
  },
  {
    "id": 7,
    "image": 'https://placeimg.com/80/80/any/7',
    "name": '헐크',
    "birthday": '950911',
    "gender": '남자',
    "title": '초록 괴물',
    "job": '박사(히어로)'
  },
];

class App extends Component {
  render() {
      return (
        <div>
          {
              customers.map(c => {
                return(
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      title={c.title}
                      job={c.job}
                    />
                  );
              })
          }
        </div>
      );
    }
  }

export default App;
