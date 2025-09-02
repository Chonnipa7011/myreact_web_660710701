import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://scontent.fkdt3-1.fna.fbcdn.net/v/t1.6435-9/67673854_2349503361793690_8674860371913211904_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=j_fsmIZRr-cQ7kNvwHLi7TH&_nc_oc=Adkpi0IexZp7LsmJmT_sbNhj5cw64yhRD8WG8m8PQm0eNS6htyrY_LZFrlnmtL6eQWlz5H2h80XxqRvjIpUfDfTh&_nc_zt=23&_nc_ht=scontent.fkdt3-1.fna&_nc_gid=9ZTRqrIGFTEw0bAJpRXeqw&oh=00_AfWg8gIBPjC1EHpkIDRPx_G-AdonmbaVNwnzbYioHs6G-Q&oe=68DDF591" 
        alt="User Avatar"
        style={{
            borderRadius: '60%',
            width: '80px',
            height: '80px',
            border: '2px solid #70020F'
        }}
    />
);

const UserName = () => (
    <><h3 style={{ color: '#70020F', margin: '10px 0' }}>
        นางสาว ชนม์นิภา คำนูณวัฒน์
    </h3><h3 style={{ color: '#70020F', margin: '10px 0' }}>
            Miss Chonnipa Kumnoonwat
        </h3></>
);

const UserBio = () => (
    <><p style={{ color: '#70020F', fontSize: '14px' }}>
        ชื่อเล่น / Nickname : แจ็คพ็อต / Jackpot
    </p><p style={{ color: '#70020F', fontSize: '14px' }}>
            อายุ / Age : 20
        </p><p style={{ color: '#70020F', fontSize: '14px' }}>
        ศึกษา / Studying : คณะวิทยาศาสตร์ สาขาit / Faculty of Science, IT
    </p><p style={{ color: '#70020F', fontSize: '14px' }}>
        ชั้นปี / Year : 3 / Junior  
        </p></>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#FFDEE2',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;