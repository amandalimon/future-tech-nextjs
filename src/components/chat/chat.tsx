'use client';
import { useChat } from 'ai/react';

export const Chat = (props: { agent: string }) => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            {
                id: '1',
                role: 'system',
                content: props.agent
            }
        ],
    });

    return (
        <main className="">
            <section className="">
                {messages
                    .filter(m => m.role !== 'system')
                    .map(m => (
                        <div className="" key={m.id}>
                            {m.role === 'user' ? 'User: ' : 'AI: '}
                            {m.content}
                        </div>
                    ))}
            </section>
            <form className="" onSubmit={handleSubmit}>
                <input
                    className=""
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Say something..."
                />
                <button
                    className=""
                    type="submit"
                >
                    Send
                </button>
            </form>
        </main>
    );
}