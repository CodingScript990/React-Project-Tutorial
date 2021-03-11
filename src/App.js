import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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
    const {classes} = this.props;
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>별명</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }

export default withStyles(styles)(App);
