import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
const style = {
  marginTop: 24,
};
const style2={
    width:"80%",
    margin:"auto"
}
const data ={
    "items": {
        "가렛": "마리나. 마르크. 마르크☆. 호넷. 맨블릿. 데니로. 데니로☆. 피에르. 로터자이로. 드래곤 플라이. 황금 도둑벌레",
        "강철": "로다 프로그. 스켈레톤. 바돈. 휀",
        "갑옷 조각": "조커. 레이드릭. 아놀리안. 쁘띠. 윈드 검사 에르윅. 레이쓰. 심연의 기사",
        "검은 날개": "바포메트 주니어☆",
        "고목나무 가지": "클락. 구미호. 엘더 윌로우",
        "글레스트 왕가 훈장": "지르타스. 배회하는 자. 조커. 바포메트 주니어☆. 바포메트 주니어. 라이드 워드. 피빛의 기사. 엘리스. 칼리츠버그. 윈드 고스트.  레이드릭. 레이드릭 아처. 미스틸테인. 아놀리안. 스팅. 인저스티스. 훈장. 가고일",
        "꿀": "호넷. 비타타. 크리미. 크리미☆. 토드. 미스트레스. 에드가. 빅풋",
        "끈적끈적한 액체":"타라 프로그. 고블린 아처. 오본느. 오본느☆. 고블린(해머). 고블린(단검). 고블린(모닝스타). 드레인리어. 토드. 스트라우프",
        "단단한 껍질": "페코페코, 마타, 데져트 울프, 고블린 리더, 프리오니, 세비지, 빅풋, 떠돌이 늑대, 마타",
        "로얄제리": "비타타, 미스트레스, 바포메트, 구미호, 세비지, 아놀리안, 코볼트 리더",
        "마녀의 별가루": "바소리, 오크 레이디, 슈페샤를, 엘더",
        "만드라": "마스터링, 수컷도둑벌레☆",
        "망자의 유물": "파이어럿 스켈, 마린 스피어, 플로라, 고스트링, 드레이크",
        "부드러운 털": "루나틱, 타로우, 요요, 고블린(도끼), 고블린(스피어), 크리미, 크리미☆, 스모키, 이클립",
        "부러진 시공 바늘": "도나, 펑크, 클락, 바소리, 스템웜, 페노메나, 브릴라이트, 오크 레이디, 슈페샤를",
        "불사의 심장": "백련옥, 무낙, 이시스, 솔져 스켈레톤",
        "브리간": "라이드 워드, 헌터 플라이, 미스틸테인, 인저스티스, 혜군, 서큐버스, 잭, 라플레시아",
        "비정한 마음": "바포메트 주니어☆, 바포메트 주니어, 칼리츠버그, 스팅, 도플갱어, 이블 드루이드, 아울 듀크, 윈드 고스트, 소미나, 애쉴리, 이리나스, 다크로드",
        "뼈조각": "오크 워리어, 오크 스켈레톤, 코볼트(해머), 나이트메어",
        "사금": "가이아스, 무카, 메틀러, 마이너 우로스, 골렘",
        "사이파": "바포메트, 배회하는 자, 피빛의 기사, 크램프, 다크 프리스트, 아울 바론, 다크일루젼",
        "석탄": "고블린 스팀라이더, 아르지오프",
        "성흔": "데비루치, 레이드릭 아처, 공중쁘띠, 월야화, 페러스, 레이드릭 아처, 크레로, 골드 애로우, 잭크린, 디타르데우르스",
        "셀": " 앙드레, 비타타, 더스티네스, 미스트레스, 마야, 엘더 윌로우, 우드 고블린",
        "수은": "도깨비, 본건, 호롱☆, 호롱, 천하대장군, 천하대장군",
        "시간의 결정": "펑크, 클락, 스템웜, 알람, 빅 벤",
        "심연의 꽃": "지르타스, 엘리스, 와일드 로즈, 코볼트 아처, 코볼트 리더",
        "썩은 붕대": "퍼밀리어, 암컷 도둑벌레, 포이즌 스포아, 위스퍼, 데빌링",
        "아메디스트": "소희☆, 호롱☆, 혜군, 월야화",
        "아쿠아마린": "히드라☆, 오본느☆, 마르크☆",
        "악마의 뿔": "오크 좀비, 에기라, 마르두크, 오시리스",
        "어둠에 잠긴 칼날": "바포메트, 바포메트 주니어☆, 미스틸테인",
        "유리구슬": "하이 오크, 에드가, 그리폰, 오크 아처, 아누비스, 오크 베이비",
        "오크워리어 증표": "오크 히어로, 오크 로드",
        "자르곤": "맨티스, 마리오네트, 구미호, 소희☆, 소희, 아트로스, 아처 스켈레톤",
        "젤로피": "포링, 파브르, 스포아, 로커, 윌로우, 히드라, 히드라☆, 만드라고라, 웜테일, 엔젤링, 보컬, 마스터링",
        "질콘": "로터자이로, 고블린 리더, 고블린(단검)☆, 고블린(해머)☆, 고블린(모닝스타)☆, 고블린(도끼)☆, 고블린(스피어)☆",
        "철": "도둑벌레, 수컷 도둑벌레, 수컷 도둑벌레☆, 촌촌, 울프",
        "크리스탈 뼈": "페노메나, 시계탑 관리자, 타임홀더",
        "토파즈": "데니로☆, 마야, 아누비스",
        "화려한 껍질": "도나, 브릴라이트",
        "혜안": "코볼트(도끼), 코볼트(모닝스타), 오크 히어로, 뮤턴트 드래고노이드, 오크 로드",
        "너구리의 나뭇잎": "스모키",
        "네잎 클로버": "이클립스, 라플레시아",
        "더듬이": "보컬, 황금 도둑벌레",
        "드래곤의 비늘": "뮤턴트 드래고노이드, 디타르데우르스",
        "리본 끈": "지르타스, 엘리스, 코볼트 리더",
        "방울": "혜군, 월야화",
        "별의 모서리": "프리오니, 드래곤 플라이",
        "부드러운 깃털": "고블린 리더, 그리폰, 데빌링",
        "부품": "로터자이로, 마야",
        "빛의 알갱이": "엔젤링, 토드, 마스터링",
        "비정한 마음": "도플갱어, 윈드 고스트",
        "수정으로만든 거울": "아울 듀크, 아울 바론",
        "시간왜곡버튼": "빅 벤, 타임홀더",
        "시계탑의 열쇠": "슈페샤를, 시계탑 관리자",
        "엠펠리움": "엔젤링, 고스트링, 바포메트, 빛나는 풀, 황금 도둑벌레, 오크 히어로",
        "오크의 손톱": "에드가, 떠돌이 늑대",
        "오크히어로의 증표": "오크 베이비, 오크 히어로, 오크 로드",
        "장미석영":" 바포메트, 피빛의 기사, 다크일루젼",
        "저주받은 루비": "도플갱어, 잭",
        "진주": "미스트레스, 스트라우프, 우드 고블린",
        "질콘": "로터자이로, 고블린 리더",
        "추억의 보석": "슈페샤를",
        "투명한 천": "고스트링, 드레이크",
        "토파즈": "마야",
        "피빛의 룬": "아트로스, 아누비스, 오시리스",
        "흑운모": "미스틸테인, 다크 로드",
        "각성포션": "스켈레톤, 마타, 데져트 울프, 스모키, 고블린 리더, 피빛의 기사, 아처 스켈레톤, 떠돌이 늑대, 레이드릭 아처, 오크 아처, 코볼트 아처, 월야화, 레이드릭 아처, 크레로, 골드 애로우, 잭클린, 오크 로드",
        "블루 젬스톤": "바돈, 마리나, 마린 스피어, 마르크",
        "미스틱 프로즌": "바돈, 마리나, 오본느, 오본느☆, 마르크, 마르크☆, 페노메나, 소희☆, 소희, 아놀리안, 페노메나",
        "그레이트 네이쳐": "고블린(해머), 만드라고라, 앙드레, 가이아스, 무카, 웜테일, 맨티스, 스템웜, 스팅, 페러스",
        "러프 윈드": "호넷, 피에르, 미스트레스, 브릴라이트, 헌터 플라이, 그리폰, 윈드 고스트",
        "프레임 하트": "데니로, 데니로☆, 메틀러, 에드가, 호롱☆, 호롱, 엘더 윌로우, 마르두크, 코볼트(모닝스타)",
        "이그라드실의 열매": "프리오니, 바포메트, 아트로스, 오시리스, 오크 히어로, 디타르데우르스, 타임홀더",
        "이그라드실의 나뭇잎": "브릴라이트, 배회하는 자, 바포메트 주니어☆, 바포메트 주니어",
        "초록 염료": "만드라고라, 하이 오크, 헌터 플라이, 초록 풀, 빛나는 풀, 호넷, 페러스",
        "파란 염료": "오본느, 이클립스, 파란 풀, 빛나는 풀, 오본느☆, 스트라우프, 나이트메어, 크램프, 엘더",
        "빨간 염료": "드레인리어, 페코페코의 알, 더스티네스, 프리오니, 드래곤 플라이, 호롱☆, 호롱, 마르두크, 빨간 풀, 빛나는 풀, 파이어럿 스켈, 이블 드루이드, 아울 듀크, 디타르데우르스",
        "노란 염료": "데져트 울프, 고블린 리더, 에드가, 윈드 고스트, 노란 풀, 빛나는 풀, 황금 도둑벌레, 코볼트(해머), 월야화, 코볼트 리더",
        "사과쥬스": "오본느, 맨블릿, 마리오네트, 엔젤링, 소희☆, 소희, 이시스, 포링, 루나틱, 마스터링, 오본느☆, 데빌링, 와일드 로즈",
        "사탕": "도깨비, 스모키, 위스퍼, 고스트링, 오크 베이비, 데비루치, 잭, 앨리스",
        "파리의 날개": "호넷, 드래곤 플라이, 헌터 플라이, 가고일, 촌촌, 퍼밀리어, 드레인리어, 공중쁘띠",
        "나비의 날개": "맨블릿, 크리미, 크리미☆, 더스티네스",
        "불화살": "호롱☆, 호롱, 아처 스켈레톤",
        "사악한 보물상자": "미믹",
        "에르늄 원석": "아르지오프, 마타, 클락, 스모키, 엔젤링, 고스트링, 드레이크, 토드, 브릴라이트, 지르타스, 엘리스, 오크 스켈레톤, 구미호, 도깨비, 호롱☆, 호롱, 천하대장군, 골렘",
        "에르늄": "미스트레스, 슈페샤를, 드래곤 플라이, 에드가, 아트로스",
        "오리데오콘 원석": "오본느, 마르크, 페코페코, 드레인리어, 비타타, 데비루치, 오크 워리어, 스템웜, 이클립스, 보컬, 배회하는 자, 바포메트 주니어☆, 바포메트 주니어, 헌터 플라이, 아처 스켈레톤, 마이너 우로스, 이시스, 솔져 스켈레톤, 미스틸테인",
        "오리데오콘": "로터자이로, 고블린 리더, 프리오니, 마야, 도플갱어, 바포메트, 피빛의 기사, 그리폰, 떠돌이 늑대"
    }
};
const list_key = Object.keys(data.items);

class MuiTextField extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value,
            monster: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        const v = e.target.value
        const newV = v.replace(/[^ㄱ-ㅎ가-힣.]+/g,'')
        // console.log(newV);
        this.setState({value:newV})
    }

    handleClick(e){
        console.log(data.items[this.state.value]);
        if (data.items[this.state.value]) {
            this.setState({monster:data.items[this.state.value]})
        }else{
            this.setState({monster:"죄송합니다 찾으시는 내용은 등록되지 않았거나 존재하지 않는 아이템입니다. 빠른시일내에 업데이트하겠습니다."})
        }
    }

    render(){
        return(
            <div style={style2}>
                <h1>아이템 검색</h1>
                <div>
                    <TextField
                        hintText="한글로 입력하세요."
                        value={this.state.value}
                        onChange={e => this.handleChange(e)}/>
                    <RaisedButton
                        label="search"
                        primary={true}
                        onClick={this.handleClick}
                    />
                </div>
                <div style={style}>
                    <label>Result : </label>
                    <span>{this.state.monster}</span>
                </div>
            </div>
        )
    }
}

export default MuiTextField