import React, { Component } from 'react'
import './easter.css'; 

// const menus = ['찌개찌개', '동아리', '한그릇', '마루', 
// '보까스', '바비든든', '학식', '알촌', '유메', 
// '밀숲', '한우궁', '육앤샤', '돼지우리', '213', '플랜비',
//  '도스마스', '브라운돈까스', '1층부대찌개', '2층만두집', 
//  '밥풀', '포썸', '바비든든', '옛날학사', '신정골', '예산닭갈비', 
//  '성북동경양식', '브라움돈까스', '서브 웨이', '이삭토스트', 
//  '브라운스테이크', '홍당무', '와부대자리피자집', '에비수', 
//  '행짬', '동아리', '한양식당', '피자스쿨', '한솥', '미스터피자', 
//  '포지타노', '토마토도시락', '뉴욕버거', '베쌀', '언니네화덕피자', 
//  '은화수식당', '김밥천국'];
export default class Menu extends Component {

	constructor(props){
      	super(props);
      		this.state={
        		information:[
		        {
		        	name:'돼지우리',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1930629053700848",
		        },
		        {
		        	name:'한그릇',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1903467739750313",
		        },
		        {
		        	name:'더빱집',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1899399513490469",
		        },
		        {
		        	name:'예산닭갈비',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1894449583985462",
		        },
				{
		        	name:'청학칡냉면',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1674392609324495",
		        },
		        {
		        	name:'브라더스테이크',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1606001286163628",
		        },
		        {
		        	name:'스낵플랜트',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1590101701086920",
		        },
		        {
		        	name:'투다리',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1577904945639929",
		        },
		        {
		        	name:'밥알',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1477374715692953%3A0",
		        },
		        {
		        	name:'밥알',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1477374715692953%3A0",
		        },
		        {
		        	name:'에비수',
		        	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1229739207123173%3A0",
		        },
		        // {
		        // 	name:'일미닭갈비',
		        // 	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fset%3Da.1468971273199964%26type%3D3",
		        // },
		        // {
		        // 	name:'한우궁',
		        // 	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fericafood%2Fposts%2F1463922837038141",
		        // },
		        // {
		        // 	name:'더치킨',
		        // 	link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fset%3Da.1416387801791645%26type%3D3",
		        // },
	        ]
    	}
    }

    render() {
    	var len = this.state.information.length;
    	var ran = Math.floor(Math.random()*len)
        return (
            <div className="menu">
            	<div>
            		보노보노가 추천한 메뉴 :{this.state.information[ran].name}
        		</div>
        		<div>
        			<iframe classNmae="food" src={this.state.information[ran].link}
        			scrolling="yes" />
        		</div>
            </div>
        )
    }
}
