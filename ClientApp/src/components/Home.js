import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap/lib';
import './Home.css';
import thumb0 from './img/Eng_Test.png';
import thumb1 from './img/21_Guide.png';
import thumb2 from './img/Scholarship.png';
import thumb3 from './img/bg.jpg';
import thumb4 from './img/20_Guide.png';
import thumb5 from './img/Vector_Youtube.png';
import tempImg from './img/Coming_Soon.png';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: "Title",
      description: "Description",
      url: "url",
      disabled: false
    };
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  //http://13.125.206.169/play

  selectInfo = (i) => {
    const linkInfo = [
      {title: "공대능력평가", description: "많은 새내기들을 혼란에 빠뜨렸던 공대능력평가, 드디어 공개됩니다.\n즐겨주세요 :)",
        url: "https://engexam.azurewebsites.net/", disabled: false},
      {title: "새내기자료집", description: "대학생활이 낯선 신입생 여러분들을 준비한 공과대학 입문 가이드!",
        url: "https://url.kr/qoe25y", disabled: false},
      {title: "Vector 장학금 플랫폼 beta", description: "찾아보기 힘들었던 장학금, 이제는 하나의 플랫폼에서 손쉽게 확인하세요 :)",
            url: "https://www.notion.so/Vector-beta-765eef0e0e4f4238a8287fd50fb899be", disabled: false
        },
        { title: "Battle Campus", description: "송도에서 펼쳐지는 어떤게임\n\nComing Soon...", url: "#", disabled: true },
      {title: "20학번 안내벡서", description: "신촌 새내기가 된 20학번들을 위한 유익한 안내Vec서!",
        url: "https://url.kr/numoqp", disabled: false},
      {title: "Vector Youtube", description: "공과대학 OT, 즐거운 컨텐츠, 유익한 정보가 영상으로 제공됩니다.",
        url: "https://www.youtube.com/channel/UCwe1AuUxppCfrORlrWjdYjQ", disabled: false}
    ]
    this.setState({
      title: linkInfo[i].title,
      description: linkInfo[i].description,
      url: linkInfo[i].url,
      disabled: linkInfo[i].disabled
    });
  }

  render () {
    return (
      <div>
        <h3 className="section-title">프로그램 목록</h3>
        <div className="card-list">
          <Card className={0} onClick={() => { this.selectInfo(0); this.toggle(); }} />
          <Card className={1} onClick={() => { this.selectInfo(1); this.toggle(); }} />
          <Card className={2} onClick={() => { this.selectInfo(2); this.toggle(); }} />
        </div>

        <div className="card-list">
          <Card className={6} onClick={() => { this.selectInfo(3); this.toggle(); }} />
          <Card className={4} onClick={() => { this.selectInfo(4); this.toggle(); }} />
          <Card className={5} onClick={() => { this.selectInfo(5); this.toggle(); }} />
        </div>
        
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody>
            <br/>
            {this.state.description.split('\n').map( line => {
              return (<span>{line}<br/></span>)
            })}
            <br/>
          </ModalBody>
          <ModalFooter>
            <a href={this.state.url}>
              <Button color="warning" disabled={this.state.disabled}>이동하기</Button>
            </a>
            <Button color="secondary" onClick={this.toggle}>닫기</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export class Card extends Component {
  render() {
    const imgList = [thumb0, thumb1, thumb2, thumb3, thumb4, thumb5, tempImg];

    return(
      <div className="card-container" onClick={this.props.onClick}>
        <div className="card">
          <div className="img-gradient"></div>
          <img src={imgList[this.props.className]} className="card-image" alt="Background image"></img>
          <div className="play-button"></div>
        </div>
      </div>
    );
  }
}