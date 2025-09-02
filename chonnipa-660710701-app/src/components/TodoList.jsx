import React, { useState } from 'react';

const TodoList = () => {
    // ใช้ useState แทน const ธรรมดา
    const [todos, setTodos] = useState([
        { id: 1, text: 'ตื่นนอน', completed: true },
        { id: 2, text: 'ฝึกโค้ด / แก้บัค', completed: true },
        { id: 3, text: 'ทำความเข้าใจโค้ด', completed: false },
        { id: 4, text: 'สร้างโปรเจคจริง', completed: false }
    ]);

    // ฟังก์ชันสลับสถานะ completed
    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3 style={{ color: '#722F37', marginBottom: '20px' }}>📝 รายการที่ต้องทำ</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#7D99A3',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#FFCDC1',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}  // <- คลิกได้
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer' // ให้รู้ว่าคลิกได้
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #FFCDC1, #7D99A3)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;
