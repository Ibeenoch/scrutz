import React from 'react'
import { Link } from 'react-router-dom'

const OverView = () => {
  return (
    <div className='pt-6 px-8 w-full'>
        <div className='flex justify-between items-center'>
        <h2 className='text-[#237b7c] text-md font-bold'>Overview</h2>

        <div className='flex gap-6'>
        <div className='flex items-center border border-gray-200 rounded-md px-3'>
            {/* date icon  */}
            <svg 
            className='w-4 h-6'
            viewBox="0 0 210 297"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            >
                <defs id="defs1" />
                <g id="layer1">
                    <g
                    id="g10"
                    transform="matrix(1.3775293,0,0,1.2835694,-20.569711,12.607366)"
                    >
                    <path
                        style={{
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        strokeOpacity: 1
                        }}
                        d="M 19.8389,77.605106 163.37917,77.02161"
                        id="path2"
                    />
                    <path
                        id="rect1"
                        style={{
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: 14,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                        }}
                        d="M 28.591355,44.345776 H 153.45972 c 5.49537,0 9.91945,4.424074 9.91945,9.919449 V 170.38114 c 0,5.49538 -4.42408,9.91945 -9.91945,9.91945 H 28.591355 c -5.495375,0 -9.919449,-4.42407 -9.919449,-9.91945 V 54.265225 c 0,-5.495375 4.424074,-9.919449 9.919449,-9.919449 z"
                    />
                    <path
                        style={{
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        strokeOpacity: 1
                        }}
                        d="M 45.51277,28.591356 V 44.345775"
                        id="path1"
                    />
                    <path
                        style={{
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        strokeOpacity: 1
                        }}
                        d="M 136.53831,27.424362 V 43.178781"
                        id="path4"
                    />
                    <path
                        style={{
                        fill: "#237b7c",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "27",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        strokeOpacity: 1
                        }}
                        d="m 47.444976,112.22075 0.01609,2.93279"
                        id="path8"
                    />
                    <path
                        style={{
                        fill: "#237b7c",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "27",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        strokeOpacity: 1
                        }}
                        d="m 84.567311,112.22075 0.01609,2.93279"
                        id="path9"
                    />
                    <path
                        style={{
                        fill: "#237b7c",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "27",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        strokeOpacity: 1
                        }}
                        d="m 120.07633,112.22075 0.0161,2.93279"
                        id="path10"
                    />
                    </g>
                </g>
            </svg>

            <div className='text-black text-[10px] py-1 px-2'>Date Range</div>
            <div className='border-l-2 border-gray-300 my-2'> &nbsp; </div>
            <p className='text-black text-[10px] py-1 px-3'>Nov 1, 2022 - Nov 7, 2022.</p>
            {/* arrow down icon  */}
            <svg
                className='w-2 h-2 stroke-2'
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 256 256"
                >
                <defs></defs>
                <g
                style={{
                stroke: "none",
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
                <path
                d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z"
                style={{
                    stroke: "none",
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "#237b7c",
                    fillRule: "nonzero",
                    opacity: 1
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
                />
            </g>
            </svg>
        </div>

        <div className='flex items-center gap-2 bg-gray-300 px-4 cursor-pointer rounded-lg'>
                {/* upload icon  */}
                <svg
                fill="#000000"
                className='w-4 h-4'
                version="1.1"
                id="Capa_1"
                viewBox="0 0 374.116 374.116"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                >
                <defs id="defs2">
                    <marker
                    style={{ overflow: "visible" }}
                    id="ArrowWideRounded"
                    refX={0}
                    refY={0}
                    orient="auto-start-reverse"
                    markerWidth={1}
                    markerHeight={1}
                    viewBox="0 0 1 1"
                    preserveAspectRatio="xMidYMid"
                    >
                    <path
                        style={{
                        fill: "none",
                        stroke: "context-stroke",
                        strokeWidth: 1,
                        strokeLinecap: "round"
                        }}
                        d="M 3,-3 0,0 3,3"
                        transform="rotate(180,0.125,0)"
                        id="path4"
                    />
                    </marker>
                </defs>
                <g id="g2" transform="matrix(0.78382295,0,0,0.87622748,0.01253827,46.305155)">
                    <path
                    id="rect2"
                    style={{
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "22.5714",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none"
                    }}
                    d="M 409.14241,237.54377 V 342.59015 H 53.451349 V 237.54377"
                    />
                    <path
                    style={{
                        fill: "#237b7c",
                        fillRule: "evenodd",
                        stroke: "#237b7c",
                        strokeWidth: "25.4446",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "none",
                        markerStart: "url(#ArrowWideRounded)"
                    }}
                    d="M 231.29688,32.861743 V 266.18111"
                    id="path2"
                    />
                </g>
                </svg>

                <p className='text-[10px] text-[#237b7c] font-semibold'>Export</p>
                
                
            </div>
        </div>
      </div>
        {/* body  */}
      <div className='flex flex-col gap-4 justify-center items-center mt-5'>
        {/* not found icon  */}
      <svg
            version="1.1"
            width={556}
            height={360}
            id="svg20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <defs id="defs20" />
            <path
                d="m 65.395816,64.335641 c 127.464274,0 254.928564,0 386.255404,0 0,80.560549 0,161.121089 0,244.122869 -127.46428,0 -254.92856,0 -386.255404,0 0,-80.56055 0,-161.12109 0,-244.122869 z"
                fill="#fefef9"
                id="path1"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 241.89404,121.76384 c 1.13977,-0.004 1.13977,-0.004 2.30255,-0.007 16.49244,0.10535 30.01597,6.83136 41.68089,17.93438 2.3363,2.32356 4.32186,4.55894 5.99183,7.37455 1.14626,-0.44755 2.29252,-0.89511 3.47351,-1.35623 6.51175,6.03549 13.47765,12.6572 16.67291,21.02169 0.0613,3.40762 -0.9303,5.72956 -3.01933,8.37799 -1.28904,1.25176 -2.30897,1.63954 -4.00371,2.24146 -2.09451,0.96014 -2.09451,0.96014 -3.22775,2.83482 -0.21615,1.57407 -0.28111,3.09743 -0.30004,4.68541 -0.61206,10.06135 -3.53893,20.61015 -10.48298,28.3883 -1.32975,1.47019 -1.32975,1.47019 -1.2103,2.98266 0.97023,1.84694 2.21161,3.13572 3.70419,4.61174 0.54178,0.54984 1.08357,1.09966 1.64177,1.66616 1.46974,1.34584 1.46974,1.34584 3.01762,1.02513 0.45404,-0.17483 0.90806,-0.34966 1.37585,-0.52979 1.49253,-0.16158 1.49253,-0.16158 3.03933,-0.21191 0.50686,-0.0253 1.01372,-0.0507 1.53594,-0.0768 3.97378,0.68415 6.92145,3.88083 9.67634,6.56531 0.53624,0.51988 0.53624,0.51988 1.08331,1.05026 1.16953,1.13566 2.33394,2.27618 3.49807,3.41712 0.81601,0.79561 1.63223,1.59102 2.44863,2.38624 1.70493,1.66223 3.40732,3.32687 5.10798,4.99326 2.17862,2.13436 4.36345,4.26255 6.55019,6.38899 1.68434,1.63922 3.36536,3.28167 5.04539,4.92511 0.80444,0.78612 1.60989,1.57126 2.4164,2.35535 1.12566,1.09535 2.24677,2.19495 3.36681,3.29578 0.63842,0.62427 1.27686,1.24854 1.93464,1.89173 2.5377,2.7615 3.07645,4.59474 3.24646,8.32111 -0.80133,3.72542 -3.94992,6.56141 -6.61597,9.17051 -0.32871,0.32216 -0.65742,0.64432 -0.99609,0.97625 -0.68955,0.674 -1.38084,1.34633 -2.07377,2.01701 -1.05706,1.02452 -2.10645,2.05613 -3.15534,3.08862 -0.67436,0.65736 -1.34915,1.3143 -2.02442,1.97079 -0.60805,0.592 -1.21609,1.18401 -1.84259,1.79396 -2.84508,2.47897 -5.21064,3.28897 -8.9956,3.12962 -1.98488,-0.36508 -2.70808,-0.88442 -4.17816,-2.21293 -0.48079,-0.433 -0.96158,-0.86598 -1.45693,-1.3121 -3.33554,-3.13912 -6.62836,-6.31613 -9.90104,-9.51745 -0.78464,-0.76544 -1.56938,-1.53079 -2.35421,-2.29604 -1.63299,-1.59301 -3.26473,-3.18722 -4.89558,-4.78232 -2.09225,-2.04619 -4.18762,-4.08928 -6.28394,-6.13151 -1.6157,-1.57468 -3.22974,-3.15095 -4.84328,-4.72773 -0.77255,-0.75458 -1.54563,-1.50863 -2.31923,-2.26219 -1.07569,-1.0483 -2.14915,-2.09874 -3.22202,-3.14979 -0.91666,-0.89558 -0.91666,-0.89558 -1.85183,-1.80925 -2.02826,-2.10537 -2.19469,-3.27992 -2.21616,-6.10616 -0.01,-0.58568 -0.0197,-1.17135 -0.0299,-1.77477 0.16011,-1.70059 0.16011,-1.70059 1.54952,-4.41307 -2.98029,-2.90913 -5.96057,-5.81826 -9.03115,-8.81554 -2.34244,0.76216 -4.65466,1.51576 -6.96332,2.35486 -0.49433,0.17614 -0.98866,0.35229 -1.49796,0.53376 -1.01283,0.3615 -2.02416,0.72703 -3.03391,1.09665 -13.02656,4.60193 -29.0465,3.17433 -41.46888,-2.44974 -12.38562,-5.91681 -21.43685,-14.39991 -28.3163,-25.94783 -0.2991,-0.49476 -0.59821,-0.98953 -0.90637,-1.49928 -6.4154,-11.50503 -7.53007,-27.6803 -4.30391,-40.28981 4.30455,-14.07524 13.6383,-27.63012 26.78681,-35.14034 9.85696,-5.08554 18.5465,-8.21085 29.87498,-8.04737 z"
                fill="#fefefe"
                id="path2"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 241.89404,121.76384 c 1.13977,-0.004 1.13977,-0.004 2.30255,-0.007 16.49244,0.10535 30.01597,6.83136 41.68089,17.93438 4.55057,4.56086 4.55057,4.56086 5.99183,7.37455 -0.17294,2.9011 -2.20684,4.50898 -4.16822,6.5269 -2.34996,2.30807 -2.34996,2.30807 -4.16823,5.00113 -0.4585,0 -0.91701,0 -1.38941,0 -0.7372,-1.07531 -1.42236,-2.18473 -2.08412,-3.30583 -6.29101,-9.87099 -15.24712,-15.49487 -26.39875,-19.0721 -0.51851,-0.16784 -1.037,-0.33567 -1.57122,-0.50859 -11.54879,-3.09204 -24.49068,-0.40479 -34.74062,5.10444 -9.69082,5.50058 -16.10552,13.66232 -19.95917,23.88515 -0.2212,0.5848 -0.44239,1.1696 -0.67028,1.77212 -3.77045,11.99109 -1.65801,24.31676 3.88328,35.35491 6.58945,10.97928 17.09792,18.34168 29.50864,21.78987 13.26962,2.53347 26.03315,0.39479 37.44346,-6.70173 9.72302,-6.99494 16.98958,-17.33539 18.97376,-29.0866 0.4538,-2.95807 0.81278,-5.91563 1.17266,-8.88807 4.58504,0 9.17009,0 13.89407,0 0.47497,12.67272 -3.31264,24.01071 -10.42057,34.58408 -0.4585,0.44757 -0.917,0.89512 -1.3894,1.35623 0.15951,2.69316 1.82163,4.12767 3.69062,5.97593 0.54178,0.54984 1.08357,1.09966 1.64177,1.66616 1.46974,1.34584 1.46974,1.34584 3.01762,1.02513 0.45404,-0.17483 0.90806,-0.34966 1.37585,-0.52979 1.49253,-0.16158 1.49253,-0.16158 3.03933,-0.21191 0.50686,-0.0253 1.01372,-0.0507 1.53594,-0.0768 3.97378,0.68415 6.92145,3.88083 9.67634,6.56531 0.53624,0.51988 0.53624,0.51988 1.08331,1.05026 1.16953,1.13566 2.33394,2.27618 3.49807,3.41712 0.81601,0.79561 1.63223,1.59102 2.44863,2.38624 1.70493,1.66223 3.40732,3.32687 5.10798,4.99326 2.17862,2.13436 4.36345,4.26255 6.55019,6.38899 1.68434,1.63922 3.36536,3.28167 5.04539,4.92511 0.80444,0.78612 1.60989,1.57126 2.4164,2.35535 1.12566,1.09535 2.24677,2.19495 3.36681,3.29578 0.63842,0.62427 1.27686,1.24854 1.93464,1.89173 2.5377,2.7615 3.07645,4.59474 3.24646,8.32111 -0.80133,3.72542 -3.94992,6.56141 -6.61597,9.17051 -0.32871,0.32216 -0.65742,0.64432 -0.99609,0.97625 -0.68955,0.674 -1.38084,1.34633 -2.07377,2.01701 -1.05706,1.02452 -2.10645,2.05613 -3.15534,3.08862 -0.67436,0.65736 -1.34915,1.3143 -2.02442,1.97079 -0.60805,0.592 -1.21609,1.18401 -1.84259,1.79396 -2.84508,2.47897 -5.21064,3.28897 -8.9956,3.12962 -1.98488,-0.36508 -2.70808,-0.88442 -4.17816,-2.21293 -0.48079,-0.433 -0.96158,-0.86598 -1.45693,-1.3121 -3.33554,-3.13912 -6.62836,-6.31613 -9.90104,-9.51745 -0.78464,-0.76544 -1.56938,-1.53079 -2.35421,-2.29604 -1.63299,-1.59301 -3.26473,-3.18722 -4.89558,-4.78232 -2.09225,-2.04619 -4.18762,-4.08928 -6.28394,-6.13151 -1.6157,-1.57468 -3.22974,-3.15095 -4.84328,-4.72773 -0.77255,-0.75458 -1.54563,-1.50863 -2.31923,-2.26219 -1.07569,-1.0483 -2.14915,-2.09874 -3.22202,-3.14979 -0.91666,-0.89558 -0.91666,-0.89558 -1.85183,-1.80925 -2.02826,-2.10537 -2.19469,-3.27992 -2.21616,-6.10616 -0.01,-0.58568 -0.0197,-1.17135 -0.0299,-1.77477 0.16011,-1.70059 0.16011,-1.70059 1.54952,-4.41307 -2.98029,-2.90913 -5.96057,-5.81826 -9.03115,-8.81554 -2.34244,0.76216 -4.65466,1.51576 -6.96332,2.35486 -0.49433,0.17614 -0.98866,0.35229 -1.49796,0.53376 -1.01283,0.3615 -2.02416,0.72703 -3.03391,1.09665 -13.02656,4.60193 -29.0465,3.17433 -41.46888,-2.44974 -12.38562,-5.91681 -21.43685,-14.39991 -28.3163,-25.94783 -0.2991,-0.49476 -0.59821,-0.98953 -0.90637,-1.49928 -6.4154,-11.50503 -7.53007,-27.6803 -4.30391,-40.28981 4.30455,-14.07524 13.6383,-27.63012 26.78681,-35.14034 9.85696,-5.08554 18.5465,-8.21085 29.87498,-8.04737 z"
                fill="#b1b1b6"
                id="path3"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 288.39579,215.55619 c 0.70924,0.69232 0.70924,0.69232 1.43283,1.39863 0.47282,0.45498 0.47282,0.45498 0.9552,0.91916 0.7851,0.77593 1.54984,1.57161 2.30122,2.37872 0.62328,0.65428 0.62328,0.65428 1.25914,1.3218 0.38776,0.41784 0.77552,0.83567 1.17504,1.26617 1.15084,1.01792 1.15084,1.01792 2.56172,0.65959 0.7079,-0.23996 0.7079,-0.23996 1.43011,-0.48475 1.49253,-0.16159 1.49253,-0.16159 3.03933,-0.21191 0.50686,-0.0253 1.01372,-0.0508 1.53594,-0.0768 3.97378,0.68414 6.92145,3.88083 9.67634,6.56531 0.3575,0.34658 0.71498,0.69316 1.08331,1.05025 1.16953,1.13568 2.33394,2.27618 3.49807,3.41712 0.81601,0.79561 1.63223,1.59102 2.44863,2.38624 1.70493,1.66224 3.40732,3.32688 5.10798,4.99327 2.17862,2.13436 4.36345,4.26255 6.55019,6.38899 1.68434,1.63922 3.36536,3.28167 5.04539,4.92511 0.80444,0.78612 1.60989,1.57126 2.4164,2.35535 1.12566,1.09534 2.24677,2.19495 3.36681,3.29577 0.63842,0.62428 1.27686,1.24855 1.93464,1.89174 2.5377,2.7615 3.07645,4.59474 3.24646,8.32111 -0.80133,3.72542 -3.94992,6.56141 -6.61597,9.1705 -0.32871,0.32216 -0.65742,0.64432 -0.99609,0.97625 -0.68955,0.674 -1.38084,1.34633 -2.07377,2.01702 -1.05706,1.02452 -2.10645,2.05613 -3.15534,3.08862 -0.67436,0.65737 -1.34915,1.3143 -2.02442,1.97078 -0.60805,0.59201 -1.21609,1.18402 -1.84259,1.79397 -2.84508,2.47897 -5.21064,3.28897 -8.9956,3.12962 -1.98488,-0.36508 -2.70808,-0.88443 -4.17816,-2.21294 -0.48079,-0.433 -0.96158,-0.86598 -1.45693,-1.31209 -3.33554,-3.13912 -6.62836,-6.31613 -9.90104,-9.51745 -0.78464,-0.76544 -1.56938,-1.53079 -2.35421,-2.29605 -1.63299,-1.593 -3.26473,-3.18721 -4.89558,-4.78231 -2.09225,-2.04619 -4.18762,-4.08929 -6.28394,-6.13152 -1.6157,-1.57467 -3.22974,-3.15095 -4.84328,-4.72772 -0.77255,-0.75457 -1.54563,-1.50863 -2.31923,-2.2622 -1.07569,-1.04829 -2.14915,-2.09873 -3.22202,-3.14978 -0.61111,-0.59705 -1.22221,-1.19411 -1.85183,-1.80926 -2.02826,-2.10536 -2.19469,-3.27991 -2.21616,-6.10615 -0.01,-0.58568 -0.0197,-1.17135 -0.0299,-1.77477 0.1694,-1.79929 0.68695,-2.8384 1.54952,-4.41307 -0.65194,-0.62064 -1.30388,-1.24128 -1.97557,-1.88072 -0.84684,-0.81392 -1.69351,-1.62802 -2.54001,-2.44229 -0.43075,-0.4091 -0.86148,-0.8182 -1.30528,-1.23968 -0.40746,-0.39337 -0.81493,-0.78673 -1.23473,-1.19201 -0.37836,-0.36223 -0.75671,-0.72445 -1.14653,-1.09765 -0.82903,-0.9632 -0.82903,-0.9632 -0.82903,-2.31944 1.34218,-0.95283 2.68739,-1.83738 4.08138,-2.71248 4.57479,-2.96947 10.08794,-6.64041 12.59151,-11.52803 z"
                fill="#bfbfc7"
                id="path4"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 294.64812,145.70993 c 7.01732,5.50961 14.38613,12.52093 17.36761,21.02169 -0.0761,4.01323 -1.2745,6.72169 -4.16823,9.49367 -5.52735,4.27539 -12.06854,4.08872 -18.75701,3.39059 -4.54972,-1.21004 -7.43603,-4.18272 -10.33372,-7.67121 -1.10152,-2.56858 -0.88538,-4.64608 -0.0869,-7.24741 1.02798,-2.11872 2.19781,-4.11802 3.47352,-6.10308 0.4585,0 0.917,0 1.38941,0 0.16746,-0.3785 0.33492,-0.757 0.50747,-1.14697 1.06871,-1.89704 2.37945,-3.31834 3.87785,-4.91371 0.55521,-0.59179 1.11044,-1.18358 1.68248,-1.79331 1.64781,-1.71661 3.31588,-3.39453 5.04746,-5.03026 z"
                fill="#b5f4fe"
                id="path5"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 288.39579,215.55619 c 3.01038,2.93852 6.02076,5.87704 9.03115,8.81555 -3.14695,3.68717 -6.49058,7.09624 -9.98638,10.46847 -0.51133,0.49608 -1.02268,0.99215 -1.54951,1.50325 -1.24761,1.20992 -2.49683,2.41821 -3.7476,3.62503 -2.75291,-1.23936 -4.66629,-2.99674 -6.77337,-5.0859 -0.35194,-0.33829 -0.70387,-0.67658 -1.06647,-1.02513 -2.58071,-2.53268 -2.58071,-2.53268 -2.58071,-4.06076 1.34218,-0.95284 2.68739,-1.83738 4.08137,-2.71248 4.57479,-2.96948 10.08795,-6.64042 12.59152,-11.52803 z"
                fill="#d6d6d6"
                id="path6"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 341.88799,76.541785 c 2.5411,1.383321 3.9386,2.37626 5.55763,4.746833 0.29687,3.593324 0.35654,5.922655 -2.08412,8.815548 -2.37538,1.739009 -4.75884,1.557243 -7.64173,1.356239 -2.40385,-0.78215 -3.70467,-1.864024 -4.86293,-4.068718 -0.46877,-2.611134 -0.62347,-5.016634 0.73269,-7.37984 2.57376,-3.07721 4.28485,-3.846774 8.29846,-3.470062 z"
                fill="#fcfcf8"
                id="path7"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 228.51556,292.68164 c 0.50256,-8.5e-4 1.00512,-0.003 1.52291,-0.005 1.05669,-8.5e-4 2.1134,0.002 3.17007,0.007 1.59911,0.007 3.19769,6e-5 4.79679,-0.009 5.14911,-0.005 9.97293,0.1443 14.96055,1.54166 0,0.89512 0,1.79023 0,2.71248 -5.69025,1.27577 -11.25658,1.58872 -17.07587,1.57031 -1.42371,-0.003 -2.84642,0.0139 -4.26999,0.031 -5.10298,0.0228 -9.34624,-0.34477 -14.08404,-2.27938 0.22926,-0.67134 0.4585,-1.34267 0.69471,-2.03435 3.43207,-1.2758 6.62049,-1.55769 10.28487,-1.53637 z"
                fill="#d8dbdf"
                id="path8"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 91.661596,164.41648 c 2.364947,0.43618 3.475085,1.18402 4.995898,2.99326 0.786368,2.6386 0.993003,4.07254 -0.130254,6.61166 -1.89122,2.29168 -3.035994,3.41445 -6.078665,3.85681 -2.651513,-0.36975 -3.721561,-1.17454 -5.601046,-3.00916 -1.305353,-1.73754 -1.39736,-2.53002 -1.302574,-4.70445 1.351629,-4.61776 3.320622,-6.0412 8.116641,-5.74812 z"
                fill="#b5c5c7"
                id="path9"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 401.63254,216.91244 c 2.18309,1.37626 3.22164,2.35276 3.82901,4.85543 0.17111,2.22332 0.1544,3.90268 -1.1506,5.7852 -1.68496,1.52322 -3.22763,2.21403 -5.45724,2.66745 -2.9176,-0.59332 -4.12562,-1.78675 -6.25233,-3.81442 -0.99108,-1.93484 -0.9103,-3.2784 -0.69471,-5.42495 2.61207,-3.82456 5.03633,-4.81269 9.72587,-4.06871 z"
                fill="#b5c4c7"
                id="path10"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 147.50114,93.960967 c 3.14678,1.678698 4.97816,3.643258 6.12208,6.993103 0.40418,4.02424 -0.36076,6.93334 -2.77883,10.17179 -3.46353,2.75987 -6.3258,3.11361 -10.75434,2.92438 -2.29656,-0.27805 -3.52539,-0.68884 -5.22384,-2.24627 -2.69848,-3.41717 -3.22898,-6.15575 -3.04205,-10.45257 0.4543,-3.026365 1.70285,-4.790095 4.13838,-6.667275 3.85825,-2.45139 7.33794,-2.583507 11.5386,-0.723158 z m -12.63493,4.280628 c -1.76925,2.355005 -1.64145,4.605435 -1.3894,7.459305 1.11087,2.81933 2.18614,4.55168 4.86292,6.10307 2.60885,0.84887 4.94428,1.20281 7.64174,0.67812 2.30984,-1.40109 4.3311,-3.03046 5.55763,-5.42495 0.43165,-2.91735 0.67412,-5.65142 -0.88194,-8.259275 -2.55463,-2.9348 -2.55463,-2.9348 -6.18449,-4.13228 -4.52074,-0.17384 -6.53462,0.27766 -9.60646,3.57601 z"
                fill="#bbc8cc"
                id="path11"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 252.27118,167.40974 c 2.25739,0.11597 3.19789,0.38123 4.73267,2.03435 1.48741,3.66796 1.3548,6.8782 -0.17369,10.51085 -1.08547,1.6953 -1.08547,1.6953 -1.78017,2.37342 -1.15749,0.0276 -2.31606,0.029 -3.47352,0 -2.15316,-3.41537 -2.63529,-6.25891 -2.0841,-10.17179 1.45255,-3.45224 1.45255,-3.45224 2.77881,-4.74683 z"
                fill="#1a1a1a"
                id="path12"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 225.87242,167.40974 c 1.99729,0.16953 1.99729,0.16953 4.16823,0.67812 2.12853,3.02339 1.74731,6.66306 1.3894,10.17178 -1.04204,2.50057 -1.04204,2.50057 -2.0841,4.06872 -1.60651,0.21191 -1.60651,0.21191 -3.47353,0 -1.94863,-2.48044 -2.36885,-4.36878 -2.34462,-7.45931 -0.005,-0.68532 -0.0107,-1.37065 -0.0163,-2.07674 0.31096,-2.23776 1.05142,-3.543 2.36091,-5.38257 z"
                fill="#181818"
                id="path13"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 341.88799,76.541785 c 2.5411,1.383321 3.9386,2.37626 5.55763,4.746833 0.29687,3.593324 0.35654,5.922655 -2.08412,8.815548 -2.37538,1.739009 -4.75884,1.557243 -7.64173,1.356239 -2.40385,-0.78215 -3.70467,-1.864024 -4.86293,-4.068718 -0.46877,-2.611134 -0.62347,-5.016634 0.73269,-7.37984 2.57376,-3.07721 4.28485,-3.846774 8.29846,-3.470062 z m -7.64175,5.424952 c -0.48865,2.543888 -0.18426,3.708984 0.99864,6.018312 2.25966,1.829121 3.67895,1.93588 6.55355,1.769462 1.66021,-0.254422 1.66021,-0.254422 3.25914,-1.769462 1.18291,-2.309328 1.48729,-3.474424 0.99865,-6.018312 -1.81173,-2.465133 -2.82762,-3.278007 -5.90499,-3.81442 -3.07738,0.536413 -4.09327,1.349287 -5.90499,3.81442 z"
                fill="#bbc8cc"
                id="path14"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 430.11538,158.59418 c 0.68777,0 1.37553,0 2.08412,0 1.17232,1.69531 1.17232,1.69531 2.08411,3.39061 0.63045,-0.22378 1.26089,-0.44756 1.91044,-0.67813 2.25779,-0.67812 2.25779,-0.67812 5.03661,-0.67812 -1.4782,1.5872 -2.85915,2.51379 -4.86293,3.39061 0.22925,0.62937 0.4585,1.25875 0.6947,1.9072 0.69471,2.16151 0.69471,2.16151 0.69471,4.19587 -0.4585,0 -0.91701,0 -1.38941,0 -2.08412,-2.9733 -2.08412,-2.9733 -2.08412,-4.74684 -1.1391,0.67134 -1.1391,0.67134 -2.3012,1.35624 -1.82331,1.07457 -2.44059,1.35624 -4.64583,1.35624 0,-0.44756 0,-0.89512 0,-1.35624 1.60476,-0.89513 3.20953,-1.79024 4.86292,-2.71247 -0.68775,-1.79023 -1.37551,-3.58048 -2.08412,-5.42497 z"
                fill="#cfd8d9"
                id="path15"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 103.60453,231.83105 c 2.31568,1.1302 4.63137,2.2604 6.94704,3.39059 0.18627,-0.43357 0.37254,-0.86714 0.56445,-1.31385 0.82496,-1.39862 0.82496,-1.39862 2.90907,-2.07674 -0.7812,2.01532 -1.54428,3.61737 -2.77881,5.42495 0.62328,0.29372 0.62328,0.29372 1.25915,0.59336 1.51966,0.76289 1.51966,0.76289 3.60377,2.11913 0,0.44755 0,0.89511 0,1.35622 -2.42132,-0.43768 -4.1878,-1.42496 -6.25233,-2.71246 -0.42985,0.67134 -0.8597,1.34267 -1.30257,2.03435 -0.48716,0.67135 -0.97432,1.34268 -1.47624,2.03436 -0.45851,0 -0.91701,0 -1.38942,0 0.4859,-2.13429 1.22324,-4.08627 2.08412,-6.10307 -0.68775,-0.40561 -1.37551,-0.8112 -2.08412,-1.22909 -0.68775,-0.48952 -1.37551,-0.97904 -2.08411,-1.48339 0,-0.67134 0,-1.34268 0,-2.03436 z"
                fill="#cfd8d9"
                id="path16"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 252.96588,92.816645 c 0.4585,0 0.91701,0 1.38941,0 1.19097,1.328618 2.35092,2.68454 3.47352,4.06871 1.60476,-1.11889 3.20953,-2.23779 4.86293,-3.39059 0.22925,0.671337 0.4585,1.34267 0.6947,2.03435 -0.917,0.89513 -1.83402,1.79024 -2.77881,2.71248 0.95281,2.003225 2.07622,3.689015 3.47351,5.424955 -0.917,0 -1.83401,0 -2.77881,0 -1.21573,-1.35624 -1.21573,-1.35624 -2.08411,-2.71248 -2.3314,0.40638 -3.73613,1.25196 -5.55764,2.71248 0,-2.65036 1.04601,-3.46923 2.77882,-5.424955 -0.8597,-0.77624 -0.8597,-0.77624 -1.73676,-1.56815 -1.73676,-1.82244 -1.73676,-1.82244 -1.73676,-3.8568 z"
                fill="#cfd8d9"
                id="path17"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 239.33232,195.00071 c 0.77373,-0.004 0.77373,-0.004 1.56308,-0.007 3.12372,0.0297 5.65725,0.43151 8.59697,1.57477 0,0.22377 0,0.44755 0,0.67812 -6.18981,0 -12.37963,0 -18.75702,0 3.12595,-2.28848 4.89756,-2.32383 8.59697,-2.24627 z"
                fill="#798797"
                id="path18"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 343.2774,77.898023 c 2.19607,0.928911 2.77375,1.348822 4.16822,3.390595 0.055,1.58137 0.0611,3.165681 0,4.746829 -0.45851,0 -0.91701,0 -1.3894,0 -0.3009,-1.069943 -0.3009,-1.069943 -0.60787,-2.1615 -0.62333,-2.061948 -1.31246,-4.000647 -2.17095,-5.975924 z"
                fill="#b6c4c8"
                id="path19"
                style={{ strokeWidth: "0.686361" }}
            />
            <path
                d="m 234.87101,195.40069 c 0.70388,0.24258 0.70388,0.24258 1.42198,0.49004 1.0978,0.14372 2.19803,0.27074 3.29984,0.38145 0.55522,0.0568 1.11044,0.11364 1.68249,0.17217 0.62865,0.0617 0.62865,0.0617 1.27,0.12451 0,0.22377 0,0.44755 0,0.67812 -3.89729,0 -7.79457,0 -11.80997,0 2.77882,-2.03436 2.77882,-2.03436 4.13566,-1.84629 z"
                fill="#8a96a5"
                id="path20"
                style={{ strokeWidth: "0.686361" }}
            />
        </svg>

            <p className='text-black font-bold text-sm py-2'>No activity yet, Create a new campaign to get started</p>
            <Link to="/create/campaign">
            <div className='bg-[#237b7c] flex gap-1 rounded-md px-6 py-2 cursor-pointer items-center'>
                    {/* add icon  */}
                    <svg className='w-2 h-2 fill-white stroke-2' version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" >
                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><g><path fill="white" stroke='white' d="M124.1,10.8c-1,0.6-2.6,1.9-3.4,3l-1.5,2L119,67.4l-0.1,51.6H68c-56.6,0-53.2-0.2-56.4,3.9c-2.2,2.9-2.2,7.6,0,10.5c3.1,4.1-0.3,3.9,56.4,3.9h50.9V188c0,56.6-0.2,53.2,3.9,56.4c2.9,2.2,7.6,2.2,10.5,0c4.1-3.1,3.9,0.3,3.9-56.4v-50.9H188c56.6,0,53.2,0.2,56.4-3.9c2.2-2.9,2.2-7.6,0-10.5c-3.1-4.1,0.3-3.9-56.4-3.9h-50.9V68c0-56.5,0.2-53.2-3.8-56.3C130.8,9.9,126.8,9.4,124.1,10.8z"/></g></g></g>
                    </svg>
                    <p className='text-white text-xs'>New Campaign</p>
            </div> 
            </Link>

      </div>

    </div>
  )
}

export default OverView
