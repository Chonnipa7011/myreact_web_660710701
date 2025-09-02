import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#722F37',
                marginBottom: '40px'
            }}>
                แนะนำตัว
            </h1>
            <h1 style={{
                textAlign: 'center',
                color: '#722F37',
                marginBottom: '40px'
            }}>
            Introduce myself
            </h1>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#EFDFBB'
            }}>
                <h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    ยินดีตอนรับทุกคนสู่หน้าเว็บแนะนำตัวของฉัน!
                </h2>
                <Welcome />
                <Greeting />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#EFDFBB'
            }}>
                <><h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    นาฬิกา
                </h2><h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    Clock
                </h2></>
                <Clock />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#EFDFBB'
            }}>
                <><h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    ประวัติส่วนตัว
                </h2><h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    personal information
                </h2></>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#EFDFBB'
            }}>
                <><h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    สิ่งที่ต้องทำประจำวัน
                </h2><h2 style={{ color: '#722F37', marginBottom: '20px' }}>
                    Daily tasks
                </h2></>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;