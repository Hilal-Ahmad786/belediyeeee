(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{1213:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/step3",function(){return a(2677)}])},7043:function(e,r,a){"use strict";var n=a(2729),t=a(5893),l=a(9630);function s(){let e=(0,n._)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n"]);return s=function(){return e},e}function i(){let e=(0,n._)(["\n  display: none;\n\n  &:checked + label {\n    background-color: #5cb85c;\n    color: white;\n  }\n"]);return i=function(){return e},e}function d(){let e=(0,n._)(["\n  display: inline-block;\n  padding: 8px 16px;\n  margin: 4px;\n  border: 2px solid #5cb85c;\n  border-radius: 8px;\n  cursor: pointer;\n"]);return d=function(){return e},e}let c=l.Z.div(s()),o=l.Z.input(i()),u=l.Z.label(d());r.Z=e=>{let{name:r,value:a,label:n,onChange:l,checked:s}=e;return(0,t.jsxs)(c,{children:[(0,t.jsx)(o,{type:"radio",id:a,name:r,value:a,onChange:l,checked:s}),(0,t.jsx)(u,{htmlFor:a,children:n})]})}},3224:function(e,r,a){"use strict";a.d(r,{Z:function(){return C}});var n=a(5893),t=a(688),l=a(3967),s=a.n(l),i=a(7294),d=a(3115);let c=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l="div",...i}=e;return t=(0,d.vE)(t,"card-body"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});c.displayName="CardBody";let o=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l="div",...i}=e;return t=(0,d.vE)(t,"card-footer"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});o.displayName="CardFooter";var u=a(4483);let m=i.forwardRef((e,r)=>{let{bsPrefix:a,className:t,as:l="div",...c}=e,o=(0,d.vE)(a,"card-header"),m=(0,i.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return(0,n.jsx)(u.Z.Provider,{value:m,children:(0,n.jsx)(l,{ref:r,...c,className:s()(t,o)})})});m.displayName="CardHeader";let f=i.forwardRef((e,r)=>{let{bsPrefix:a,className:t,variant:l,as:i="img",...c}=e,o=(0,d.vE)(a,"card-img");return(0,n.jsx)(i,{ref:r,className:s()(l?"".concat(o,"-").concat(l):o,t),...c})});f.displayName="CardImg";let p=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l="div",...i}=e;return t=(0,d.vE)(t,"card-img-overlay"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});p.displayName="CardImgOverlay";let x=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l="a",...i}=e;return t=(0,d.vE)(t,"card-link"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});x.displayName="CardLink";var h=a(4021);let v=(0,h.Z)("h6"),k=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l=v,...i}=e;return t=(0,d.vE)(t,"card-subtitle"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});k.displayName="CardSubtitle";let g=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l="p",...i}=e;return t=(0,d.vE)(t,"card-text"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});g.displayName="CardText";let N=(0,h.Z)("h5"),b=i.forwardRef((e,r)=>{let{className:a,bsPrefix:t,as:l=N,...i}=e;return t=(0,d.vE)(t,"card-title"),(0,n.jsx)(l,{ref:r,className:s()(a,t),...i})});b.displayName="CardTitle";let j=i.forwardRef((e,r)=>{let{bsPrefix:a,className:t,bg:l,text:i,border:o,body:u=!1,children:m,as:f="div",...p}=e,x=(0,d.vE)(a,"card");return(0,n.jsx)(f,{ref:r,...p,className:s()(t,x,l&&"bg-".concat(l),i&&"text-".concat(i),o&&"border-".concat(o)),children:u?(0,n.jsx)(c,{children:m}):m})});j.displayName="Card";var y=Object.assign(j,{Img:f,Title:b,Subtitle:k,Body:c,Link:x,Text:g,Header:m,Footer:o,ImgOverlay:p}),C=e=>{let{children:r}=e;return(0,n.jsx)(t.Z,{className:"my-4",children:(0,n.jsx)(y,{className:"shadow p-4",children:r})})}},2677:function(e,r,a){"use strict";a.r(r);var n=a(2729),t=a(5893),l=a(7294),s=a(1163),i=a(7043),d=a(9630),c=a(3224);function o(){let e=(0,n._)(["\n  padding: 32px;\n"]);return o=function(){return e},e}function u(){let e=(0,n._)(["\n  margin-top: 16px;\n  padding: 16px 32px;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n"]);return u=function(){return e},e}let m=d.Z.div(o()),f=d.Z.button(u());r.default=()=>{let[e,r]=(0,l.useState)(""),a=(0,s.useRouter)(),n=e=>{r(e.target.value)};return(0,t.jsx)(m,{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)("h1",{children:"Başvuru İ\xe7in İlgili Birimi Se\xe7iniz"}),(0,t.jsx)(i.Z,{name:"department",value:"Genel Sekreterlik",label:"Genel Sekreterlik",onChange:n,checked:"Genel Sekreterlik"===e}),(0,t.jsx)(i.Z,{name:"department",value:"Bilgi İşlem",label:"Bilgi İşlem",onChange:n,checked:"Bilgi İşlem"===e}),(0,t.jsx)(i.Z,{name:"department",value:"İnsan Kaynakları",label:"İnsan Kaynakları",onChange:n,checked:"İnsan Kaynakları"===e}),(0,t.jsx)(i.Z,{name:"department",value:"Park Bah\xe7eler",label:"Park Bah\xe7eler",onChange:n,checked:"Park Bah\xe7eler"===e}),(0,t.jsx)(i.Z,{name:"department",value:"Ulaşım",label:"Ulaşım",onChange:n,checked:"Ulaşım"===e}),(0,t.jsx)(i.Z,{name:"department",value:"Diğer",label:"Diğer",onChange:n,checked:"Diğer"===e}),(0,t.jsx)(f,{onClick:()=>{a.push("/step4")},className:"btn btn-success",children:"Next"})]})})}},1163:function(e,r,a){e.exports=a(6036)}},function(e){e.O(0,[841,888,774,179],function(){return e(e.s=1213)}),_N_E=e.O()}]);