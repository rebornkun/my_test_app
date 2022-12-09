import './TopBar.css'

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className='topbar_container'>
                {/* logo */}
                <div className='logo_container'>
                    <svg width="157" height="33" viewBox="0 0 157 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.10742 24.7676C0.369141 24.7676 0 24.5625 0 24.1523C0 23.7305 0.246094 23.5195 0.738281 23.5195C1.47656 23.5195 1.99805 23.4082 2.30273 23.1855C2.90039 22.752 3.25195 22.0078 3.35742 20.9531C3.38086 20.707 3.4043 20.332 3.42773 19.8281C3.46289 19.3242 3.49805 18.7383 3.5332 18.0703C3.58008 17.3906 3.62109 16.6465 3.65625 15.8379C3.69141 15.0176 3.72656 14.1797 3.76172 13.3242C3.80859 12.457 3.84961 11.5898 3.88477 10.7227C3.91992 9.85547 3.94922 9.0293 3.97266 8.24414C4.03125 6.28711 4.06055 5.05078 4.06055 4.53516C4.06055 4.01953 4.01953 3.61523 3.9375 3.32227C3.86719 3.0293 3.76172 2.78906 3.62109 2.60156C3.36328 2.27344 2.94727 2.06836 2.37305 1.98633C1.36523 1.8457 0.861328 1.62891 0.861328 1.33594C0.861328 1.13672 0.931641 0.978516 1.07227 0.861328C1.22461 0.732422 1.41797 0.667969 1.65234 0.667969L4.41211 0.914062L5.95898 0.84375C6.24023 0.84375 6.47461 0.966797 6.66211 1.21289C6.84961 1.44727 7.06055 1.79883 7.29492 2.26758L15.8027 19.8984C16.002 19.4414 16.2656 18.8379 16.5938 18.0879C16.9219 17.3379 17.2793 16.5059 17.666 15.5918C18.0645 14.6777 18.4863 13.7109 18.9316 12.6914C19.377 11.6719 19.8164 10.6582 20.25 9.65039C20.6836 8.64258 21.0996 7.67578 21.498 6.75C21.8965 5.82422 22.248 5.00391 22.5527 4.28906C22.8574 3.5625 23.1094 2.9707 23.3086 2.51367C23.5078 2.05664 23.6426 1.73438 23.7129 1.54688C23.7949 1.34766 23.9473 1.16602 24.1699 1.00195C24.3926 0.837891 24.6562 0.755859 24.9609 0.755859L26.6133 0.826172L28.7227 0.667969C29.6016 0.667969 30.041 0.884766 30.041 1.31836C30.041 1.5293 29.8477 1.67578 29.4609 1.75781C29.0742 1.82812 28.7461 1.89258 28.4766 1.95117C28.207 2.00977 27.9551 2.09766 27.7207 2.21484C27.1816 2.50781 26.9121 2.99414 26.9121 3.67383L27.8086 20.8828C27.9023 22.3945 28.4707 23.25 29.5137 23.4492C29.8066 23.4961 30.0938 23.5195 30.375 23.5195C30.8789 23.5195 31.1309 23.7305 31.1309 24.1523C31.1309 24.5625 30.7617 24.7676 30.0234 24.7676C29.7305 24.7676 29.4785 24.75 29.2676 24.7148C29.0566 24.6914 28.8457 24.668 28.6348 24.6445C28.002 24.5508 27.4277 24.5039 26.9121 24.5039L23.168 24.7676C22.4062 24.7676 22.0254 24.5508 22.0254 24.1172C22.0254 23.7539 22.3008 23.5723 22.8516 23.5723C23.4023 23.5723 23.8008 23.5312 24.0469 23.4492C24.3047 23.3555 24.4922 23.2148 24.6094 23.0273C24.7734 22.7461 24.8555 22.084 24.8555 21.041V19.3887C24.8555 18.5918 24.7969 16.9746 24.6797 14.5371C24.5625 12.0996 24.4805 10.3594 24.4336 9.31641C24.3398 7.11328 24.252 5.44336 24.1699 4.30664L15.8555 23.3613C15.5508 24.0527 15.2754 24.3984 15.0293 24.3984C14.8652 24.3984 14.7246 24.3164 14.6074 24.1523C14.502 23.9766 14.3555 23.7012 14.168 23.3262L5.66016 5.80078C5.21484 11.7656 4.99219 17.2207 4.99219 22.166C4.99219 23.127 5.77148 23.6074 7.33008 23.6074C7.75195 23.6074 7.96289 23.7773 7.96289 24.1172C7.96289 24.5508 7.58203 24.7676 6.82031 24.7676L3.97266 24.5039C3.375 24.5039 2.8125 24.5449 2.28516 24.627C1.75781 24.7207 1.36523 24.7676 1.10742 24.7676ZM24.6973 3.09375L24.7148 3.07617L24.6973 3.09375Z" fill="white"/>
                        <path d="M46.3036 8.06836C46.7841 8.06836 47.0243 8.21484 47.0243 8.50781C47.0243 8.75391 46.8016 8.95898 46.3563 9.12305C45.9227 9.27539 45.5887 9.42188 45.3544 9.5625C45.12 9.69141 44.9032 9.87891 44.704 10.125C44.2938 10.6289 43.8602 11.502 43.4032 12.7441L40.7665 19.916C38.5048 26.0801 36.87 29.7891 35.8622 31.043C34.8661 32.3086 33.6825 32.9414 32.3114 32.9414C31.3622 32.9414 30.6766 32.8125 30.2548 32.5547C29.5516 32.1094 29.2001 31.6523 29.2001 31.1836C29.2001 30.8555 29.3173 30.5859 29.5516 30.375C29.9384 30.0117 30.2899 29.8301 30.6063 29.8301C30.9345 29.8301 31.2216 29.8828 31.4677 29.9883C31.7137 30.1055 31.9481 30.2285 32.1708 30.3574C32.4052 30.498 32.6161 30.6211 32.8036 30.7266C32.9911 30.8438 33.161 30.9023 33.3134 30.9023C33.4657 30.9023 33.6239 30.8906 33.788 30.8672C33.9637 30.8438 34.1512 30.7617 34.3505 30.6211C34.5497 30.4922 34.7665 30.2871 35.0009 30.0059C35.2352 29.7246 35.493 29.332 35.7743 28.8281C36.3954 27.6914 37.0927 26.0859 37.8661 24.0117C37.3622 23.6367 36.5653 22.2832 35.4755 19.9512L31.5907 11.373C31.2391 10.6113 30.9696 10.125 30.7821 9.91406C30.4774 9.52734 30.0673 9.27539 29.5516 9.1582C29.0477 9.0293 28.7958 8.80664 28.7958 8.49023C28.7958 8.38477 28.8602 8.29102 28.9891 8.20898C29.1063 8.11523 29.2821 8.06836 29.5165 8.06836L32.2411 8.26172C32.9559 8.26172 33.495 8.23828 33.8583 8.19141C34.4794 8.10938 34.9891 8.06836 35.3876 8.06836C36.1845 8.06836 36.5829 8.23828 36.5829 8.57812C36.5829 8.92969 36.1141 9.12891 35.1766 9.17578C34.579 9.21094 34.2391 9.36914 34.1571 9.65039C34.1337 9.73242 34.122 9.82031 34.122 9.91406C34.122 10.0664 34.2977 10.5234 34.6493 11.2852L38.9384 20.9707C38.9501 20.9707 38.9559 20.959 38.9559 20.9355C38.9559 20.9121 38.9618 20.8887 38.9735 20.8652L41.9618 12.0586C42.1376 11.5312 42.2841 11.0977 42.4012 10.7578C42.5302 10.4062 42.5946 10.1133 42.5946 9.87891C42.5946 9.63281 42.5126 9.46289 42.3485 9.36914C42.1845 9.27539 41.868 9.21094 41.3993 9.17578C40.5204 9.09375 40.0809 8.88867 40.0809 8.56055C40.0809 8.23242 40.4794 8.06836 41.2762 8.06836L44.2645 8.24414L46.3036 8.06836Z" fill="white"/>
                        <path d="M50.4373 24.7676C49.6755 24.7676 49.2947 24.5508 49.2947 24.1172C49.2947 23.7773 49.5056 23.6074 49.9275 23.6074L50.7888 23.6953C51.492 23.6953 51.9607 23.3027 52.1951 22.5176C52.406 21.8496 52.5115 20.6543 52.5115 18.9316V2.49609H52.0369C49.9861 2.49609 48.3513 2.70703 47.1326 3.12891C46.2888 3.43359 45.7146 3.95508 45.4099 4.69336C45.1873 5.23242 44.9529 5.50195 44.7068 5.50195C44.367 5.50195 44.197 5.30273 44.197 4.9043C44.197 4.78711 44.2205 4.65234 44.2673 4.5C44.3259 4.34766 44.3904 4.16602 44.4607 3.95508C44.6482 3.39258 44.7595 2.80664 44.7947 2.19727C44.8298 1.58789 44.8943 1.18359 44.988 0.984375C45.0935 0.773438 45.2341 0.667969 45.4099 0.667969C45.5857 0.667969 45.7439 0.685547 45.8845 0.720703C46.0252 0.744141 46.2302 0.773438 46.4998 0.808594C47.2029 0.902344 48.0877 0.949219 49.1541 0.949219H60.2986C61.1658 0.949219 61.7927 0.902344 62.1795 0.808594C62.5779 0.714844 62.865 0.667969 63.0408 0.667969C63.4275 0.667969 63.6209 0.849609 63.6209 1.21289C63.6209 1.40039 63.5857 1.62305 63.5154 1.88086C63.3396 2.45508 63.2224 2.95312 63.1638 3.375C63.117 3.78516 63.0701 4.125 63.0232 4.39453C62.9763 4.65234 62.9236 4.85742 62.865 5.00977C62.7712 5.26758 62.6306 5.39648 62.4431 5.39648C62.2556 5.39648 62.1326 5.33203 62.074 5.20312C62.0271 5.0625 61.9744 4.79883 61.9158 4.41211C61.8572 4.02539 61.7576 3.70898 61.617 3.46289C61.4763 3.2168 61.2888 3.02344 61.0545 2.88281C60.6443 2.625 59.9763 2.49609 59.0505 2.49609H55.2712V18.9316C55.2712 20.7012 55.3474 21.8438 55.4998 22.3594C55.6638 22.8633 55.8572 23.2148 56.0798 23.4141C56.3142 23.6016 56.6189 23.6953 56.9939 23.6953L57.8377 23.6074C58.2595 23.6074 58.4705 23.7773 58.4705 24.1172C58.4705 24.5508 58.0955 24.7676 57.3455 24.7676C56.9587 24.7676 56.5486 24.7324 56.115 24.6621C54.7087 24.4395 53.5017 24.3984 52.4939 24.5391C51.4978 24.6914 50.8123 24.7676 50.4373 24.7676Z" fill="white"/>
                        <path d="M65.276 22.5352C64.5963 21.7734 64.069 20.877 63.694 19.8457C63.3307 18.8145 63.1491 17.6719 63.1491 16.418C63.1491 15.1523 63.3659 13.9922 63.7995 12.9375C64.233 11.8828 64.8307 10.9805 65.5924 10.2305C67.1745 8.67188 69.1256 7.89258 71.4459 7.89258C73.3678 7.89258 74.9205 8.52539 76.1041 9.79102C77.2291 11.0098 77.7916 12.5156 77.7916 14.3086C77.7916 14.8945 77.7096 15.2988 77.5455 15.5215C77.3932 15.7324 77.1998 15.8613 76.9655 15.9082C76.7311 15.9434 76.4088 15.9785 75.9987 16.0137C75.5885 16.0371 75.0905 16.0664 74.5045 16.1016C73.9186 16.1367 73.2623 16.1719 72.5358 16.207C71.8209 16.2422 71.0885 16.2832 70.3385 16.3301C68.6159 16.4355 67.233 16.541 66.1901 16.6465C66.4479 19.7988 67.6549 21.8438 69.8112 22.7812C70.5143 23.0859 71.2643 23.2383 72.0612 23.2383C73.7487 23.2383 75.0846 22.7461 76.069 21.7617C76.4909 21.3398 76.8131 21.1289 77.0358 21.1289C77.4577 21.1289 77.6686 21.3809 77.6686 21.8848C77.6686 22.1426 77.4928 22.4531 77.1413 22.8164C76.7897 23.1797 76.2858 23.5547 75.6295 23.9414C74.4694 24.6094 73.1159 24.9434 71.569 24.9434C70.0221 24.9434 68.7565 24.7324 67.7721 24.3105C66.7995 23.877 65.9674 23.2852 65.276 22.5352ZM66.1549 15.3457C71.651 15.0645 74.5455 14.7656 74.8385 14.4492C74.944 14.332 74.9967 13.9863 74.9967 13.4121C74.9967 12.8379 74.8854 12.2812 74.6627 11.7422C74.4401 11.1914 74.1413 10.7227 73.7663 10.3359C72.9928 9.55078 72.0319 9.1582 70.8834 9.1582C69.5827 9.1582 68.487 9.70312 67.5963 10.793C66.6588 11.9297 66.1784 13.4473 66.1549 15.3457Z" fill="white"/>
                        <path d="M79.3941 23.5547C78.855 23.168 78.4331 22.7461 78.1284 22.2891C77.8237 21.8203 77.6714 21.457 77.6714 21.1992C77.6714 20.9297 77.7066 20.7305 77.7769 20.6016C77.8589 20.4609 77.9644 20.332 78.0933 20.2148C78.398 19.9219 78.6909 19.7754 78.9722 19.7754C79.2652 19.7754 79.4878 19.8457 79.6402 19.9863C79.7925 20.1152 79.9331 20.3789 80.062 20.7773C80.2027 21.1641 80.396 21.5391 80.6421 21.9023C80.8999 22.2656 81.2046 22.582 81.5562 22.8516C82.3179 23.4258 83.2495 23.7129 84.3511 23.7129C85.3237 23.7129 86.1499 23.4727 86.8296 22.9922C87.5444 22.5 87.9019 21.8848 87.9019 21.1465C87.9019 20.3965 87.5796 19.7402 86.9351 19.1777C86.2437 18.5801 85.2183 18.0117 83.8589 17.4727C82.4995 16.9219 81.5327 16.459 80.9585 16.084C80.3843 15.709 79.9155 15.3105 79.5523 14.8887C78.8609 14.0801 78.5152 13.1543 78.5152 12.1113C78.5152 10.916 79.0542 9.91992 80.1323 9.12305C81.2222 8.32617 82.5874 7.92773 84.228 7.92773C85.646 7.92773 86.8413 8.22656 87.814 8.82422C88.6577 9.35156 89.0796 9.9082 89.0796 10.4941C89.0796 10.7988 88.9214 11.0625 88.605 11.2852C88.3003 11.4961 88.0073 11.6016 87.7261 11.6016C87.4566 11.6016 87.2456 11.5488 87.0933 11.4434C86.9409 11.3262 86.7124 11.0332 86.4077 10.5645C85.8101 9.63867 84.9019 9.17578 83.6831 9.17578C82.312 9.17578 81.4038 9.58594 80.9585 10.4062C80.8296 10.6406 80.7652 10.8926 80.7652 11.1621C80.7652 11.4316 80.8179 11.6953 80.9234 11.9531C81.0405 12.1992 81.2515 12.457 81.5562 12.7266C82.2007 13.2656 83.3843 13.8926 85.1069 14.6074C88.4819 16.002 90.1694 17.7891 90.1694 19.9688C90.1694 21.4336 89.5777 22.6289 88.3941 23.5547C87.1987 24.4805 85.6636 24.9434 83.7886 24.9434C82.1245 24.9434 80.6597 24.4805 79.3941 23.5547Z" fill="white"/>
                        <path d="M100.016 9.66797C100.016 9.98438 99.8285 10.1426 99.4535 10.1426L94.4613 10.0898V19.8281C94.4613 21.6445 94.9008 22.7227 95.7797 23.0625C96.0492 23.168 96.3656 23.2207 96.7289 23.2207C97.0922 23.2207 97.4203 23.1621 97.7133 23.0449C98.018 22.916 98.2875 22.7812 98.5219 22.6406C98.7562 22.5 98.9555 22.3711 99.1195 22.2539C99.2836 22.125 99.4359 22.0605 99.5766 22.0605C99.7289 22.0605 99.8637 22.1426 99.9809 22.3066C100.098 22.4707 100.157 22.6348 100.157 22.7988C100.157 23.209 99.6352 23.7012 98.5922 24.2754C97.7953 24.7207 96.7934 24.9434 95.5863 24.9434C94.3793 24.9434 93.4359 24.5156 92.7562 23.6602C92.0766 22.793 91.7367 21.5977 91.7367 20.0742V10.0371H90.6645C89.8207 10.0371 89.3988 9.82031 89.3988 9.38672C89.3988 9.07031 89.6332 8.85352 90.102 8.73633C90.5707 8.61914 90.975 8.41406 91.3148 8.12109C91.6547 7.81641 91.9301 7.47656 92.141 7.10156C92.3637 6.71484 92.5395 6.31641 92.6684 5.90625C92.7973 5.49609 92.9145 5.12109 93.0199 4.78125C93.2777 4.00781 93.5707 3.62109 93.8988 3.62109C94.2738 3.62109 94.4613 3.95508 94.4613 4.62305V8.5957L99.4008 8.49023C99.6469 8.49023 99.8402 8.7832 99.9809 9.36914C100.004 9.49805 100.016 9.59766 100.016 9.66797Z" fill="white"/>
                        <path d="M101.829 24.5039C101.232 24.5039 100.669 24.5449 100.142 24.627C99.6263 24.7207 99.0638 24.7676 98.4544 24.7676C97.8567 24.7676 97.5579 24.5742 97.5579 24.1875C97.5579 23.7891 97.8333 23.5898 98.3841 23.5898C98.9583 23.5898 99.3684 23.4844 99.6145 23.2734C100.013 22.9102 100.406 22.3184 100.792 21.498C101.179 20.6777 101.536 19.9102 101.865 19.1953C102.204 18.4805 102.591 17.6484 103.025 16.6992C103.458 15.7383 103.933 14.6719 104.449 13.5C104.976 12.3164 105.527 11.0625 106.101 9.73828C107.601 6.25781 108.591 3.91992 109.072 2.72461C109.552 1.51758 109.816 0.849609 109.863 0.720703C109.921 0.591797 109.98 0.474609 110.038 0.369141C110.191 0.123047 110.32 0 110.425 0C110.531 0 110.618 0.0175781 110.689 0.0527344C110.759 0.0761719 110.835 0.128906 110.917 0.210938C111.093 0.433594 111.269 0.767578 111.445 1.21289C111.62 1.64648 111.855 2.23828 112.148 2.98828C112.452 3.73828 112.798 4.58789 113.185 5.53711C113.572 6.48633 113.982 7.50586 114.415 8.5957C114.849 9.68555 115.283 10.7754 115.716 11.8652C116.161 12.9434 116.589 13.9922 116.999 15.0117C117.421 16.0312 117.796 16.9512 118.124 17.7715C119.132 20.2207 119.777 21.6855 120.058 22.166C120.339 22.6465 120.574 22.9805 120.761 23.168C121.054 23.4492 121.488 23.5898 122.062 23.5898C122.636 23.5898 122.923 23.7891 122.923 24.1875C122.923 24.5742 122.554 24.7676 121.816 24.7676C121.499 24.7676 121.224 24.75 120.99 24.7148C120.767 24.6914 120.538 24.668 120.304 24.6445C119.624 24.5508 119.021 24.5039 118.493 24.5039L115.101 24.7676C114.339 24.7676 113.958 24.5508 113.958 24.1172C113.958 23.7656 114.169 23.5898 114.591 23.5898L115.646 23.7129C116.091 23.7129 116.384 23.6191 116.525 23.4316C116.665 23.2324 116.736 22.9863 116.736 22.6934C116.736 22.1426 116.501 21.2871 116.033 20.127L114.574 16.4707H104.818C104.536 17.1738 104.273 17.8184 104.027 18.4043C103.792 18.9902 103.575 19.5586 103.376 20.1094C103.06 21 102.902 21.7031 102.902 22.2188C102.902 22.7227 102.99 23.0977 103.165 23.3438C103.353 23.5781 103.699 23.6953 104.202 23.6953L105.257 23.6074C105.679 23.6074 105.89 23.7773 105.89 24.1172C105.89 24.5508 105.509 24.7676 104.747 24.7676L101.829 24.5039ZM113.976 14.9766L109.792 4.5C108.984 6.55078 107.536 10.043 105.45 14.9766H113.976Z" fill="white"/>
                        <path d="M121.414 30.6738L122.891 30.7969C123.043 30.7969 123.166 30.7617 123.26 30.6914C123.354 30.6211 123.43 30.457 123.488 30.1992C123.594 29.7305 123.647 28.6992 123.647 27.1055V13.6582C123.647 12.5566 123.559 11.8418 123.383 11.5137C123.207 11.1738 123.02 10.9453 122.82 10.8281C122.621 10.7109 122.299 10.6172 121.854 10.5469C121.42 10.4766 121.203 10.2949 121.203 10.002C121.203 9.73242 121.502 9.53906 122.1 9.42188C123.506 9.12891 124.473 8.83008 125 8.52539C125.715 8.12695 126.195 7.92773 126.442 7.92773C126.711 7.92773 126.846 8.0625 126.846 8.33203C126.846 8.46094 126.817 8.5957 126.758 8.73633C126.711 8.87695 126.658 9.04102 126.6 9.22852C126.518 9.5332 126.453 10.1133 126.406 10.9688C127.836 8.94141 129.641 7.92773 131.82 7.92773C134.035 7.92773 135.799 8.71875 137.111 10.3008C138.377 11.8359 139.01 13.8281 139.01 16.2773C139.01 18.6797 138.225 20.7188 136.654 22.3945C135.072 24.0938 133.115 24.9434 130.783 24.9434C129.096 24.9434 127.625 24.498 126.371 23.6074V27.1055C126.371 29.3203 126.465 30.5156 126.652 30.6914C126.735 30.7617 126.84 30.7969 126.969 30.7969L129.324 30.6035C129.559 30.6035 129.746 30.6738 129.887 30.8145C130.027 30.9668 130.098 31.125 130.098 31.2891C130.098 31.793 129.67 32.0449 128.815 32.0449L125.106 31.7812C124.508 31.7812 123.94 31.8223 123.401 31.9043C122.873 31.998 122.387 32.0449 121.942 32.0449C121.496 32.0449 121.186 31.9629 121.01 31.7988C120.846 31.6465 120.764 31.4824 120.764 31.3066C120.764 31.1309 120.822 30.9785 120.94 30.8496C121.057 30.7324 121.215 30.6738 121.414 30.6738ZM126.371 20.6191C127.063 22.0488 128.205 22.9863 129.799 23.4316C130.303 23.5723 130.842 23.6426 131.416 23.6426C131.99 23.6426 132.565 23.5195 133.139 23.2734C133.725 23.0156 134.235 22.623 134.668 22.0957C135.617 20.9355 136.092 19.3184 136.092 17.2441C136.092 14.9355 135.594 13.0898 134.598 11.707C133.66 10.3945 132.483 9.73828 131.065 9.73828C129.611 9.73828 128.334 10.3711 127.233 11.6367C126.893 12.0352 126.606 12.4805 126.371 12.9727V20.6191Z" fill="white"/>
                        <path d="M139.101 30.6738L140.577 30.7969C140.73 30.7969 140.853 30.7617 140.946 30.6914C141.04 30.6211 141.116 30.457 141.175 30.1992C141.28 29.7305 141.333 28.6992 141.333 27.1055V13.6582C141.333 12.5566 141.245 11.8418 141.069 11.5137C140.894 11.1738 140.706 10.9453 140.507 10.8281C140.308 10.7109 139.985 10.6172 139.54 10.5469C139.106 10.4766 138.89 10.2949 138.89 10.002C138.89 9.73242 139.189 9.53906 139.786 9.42188C141.192 9.12891 142.159 8.83008 142.687 8.52539C143.401 8.12695 143.882 7.92773 144.128 7.92773C144.397 7.92773 144.532 8.0625 144.532 8.33203C144.532 8.46094 144.503 8.5957 144.444 8.73633C144.397 8.87695 144.345 9.04102 144.286 9.22852C144.204 9.5332 144.14 10.1133 144.093 10.9688C145.522 8.94141 147.327 7.92773 149.507 7.92773C151.722 7.92773 153.485 8.71875 154.798 10.3008C156.064 11.8359 156.696 13.8281 156.696 16.2773C156.696 18.6797 155.911 20.7188 154.341 22.3945C152.759 24.0938 150.802 24.9434 148.47 24.9434C146.782 24.9434 145.312 24.498 144.058 23.6074V27.1055C144.058 29.3203 144.151 30.5156 144.339 30.6914C144.421 30.7617 144.526 30.7969 144.655 30.7969L147.011 30.6035C147.245 30.6035 147.433 30.6738 147.573 30.8145C147.714 30.9668 147.784 31.125 147.784 31.2891C147.784 31.793 147.356 32.0449 146.501 32.0449L142.792 31.7812C142.194 31.7812 141.626 31.8223 141.087 31.9043C140.56 31.998 140.073 32.0449 139.628 32.0449C139.183 32.0449 138.872 31.9629 138.696 31.7988C138.532 31.6465 138.45 31.4824 138.45 31.3066C138.45 31.1309 138.509 30.9785 138.626 30.8496C138.743 30.7324 138.901 30.6738 139.101 30.6738ZM144.058 20.6191C144.749 22.0488 145.892 22.9863 147.485 23.4316C147.989 23.5723 148.528 23.6426 149.103 23.6426C149.677 23.6426 150.251 23.5195 150.825 23.2734C151.411 23.0156 151.921 22.623 152.355 22.0957C153.304 20.9355 153.778 19.3184 153.778 17.2441C153.778 14.9355 153.28 13.0898 152.284 11.707C151.347 10.3945 150.169 9.73828 148.751 9.73828C147.298 9.73828 146.021 10.3711 144.919 11.6367C144.579 12.0352 144.292 12.4805 144.058 12.9727V20.6191Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default TopBar;