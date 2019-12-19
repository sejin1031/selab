import React, { Component } from 'react'
import './easter.css'; 


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
        			<iframe className="food" src={this.state.information[ran].link}
        			scrolling="yes" />
        		</div>
            </div>
        )
    }
}
