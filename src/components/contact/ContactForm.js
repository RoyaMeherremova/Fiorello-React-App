import React, { useState, useEffect } from 'react';
import '../../assets/scss/_contactForm.scss';

function ContactForm() {
    const [settings, setSettings] = useState([]);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [loading, setLoading] = useState(false);

    // form state-ləri
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json'); // lokal JSON
                if (!res.ok) throw new Error('Failed to fetch JSON');
                const data = await res.json();

                setSettings(data.settings || []);
                setHeaderBackgrounds(data.headerBackgrounds || []);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const filteredData1 = settings.filter(item => item.key === 'Logo');
    const filteredData2 = headerBackgrounds.filter(item => item.key === 'ContactPageForm');

    const contact = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name,
            email,
            subject,
            content
        };

        // Lokal test üçün
        console.log('Form submitted:', data);
        alert('Məlumat uğurla göndərildi (lokal test)!');

        // Form-u sıfırla
        setName('');
        setEmail('');
        setSubject('');
        setContent('');
        setLoading(false);
    };

    return (
        <div className='container' style={{ marginTop: '8%', marginBottom: '8%' }}>
            <div className='row'>
                <div className='col-6 form-left'>
                    <img className='expert-img' src='/images/expert/h3-team-img-1.png' alt='expert' />
                    {filteredData2.map((item, index) => (
                        <div key={index}>
                            <h4>{item.value.split(" ").map((word, i) =>
                                word.toLowerCase() === "flowers"
                                    ? (<span key={i} className='red-word'>{word} </span>)
                                    : word + " "
                            )}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    {filteredData1.map((item, index) => (
                        <img key={index} className='logo-img' src={item.value} alt='logo' />
                    ))}
                </div>

                <div className='col-6 form-right'>
                    <div className='login-form'>
                        <h2>Get in Touch!</h2>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostr. Mauris in erat justullam ac urna eu felis dapib</p>
                        <form className='form-row' onSubmit={contact}>
                            <div className='input-area'>
                                <input
                                    type="text"
                                    placeholder="   Your Name..."
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='input-area'>
                                <input
                                    type="email"
                                    placeholder="   Email"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='input-area'>
                                <input
                                    type="text"
                                    placeholder="  Subject"
                                    value={subject}
                                    required
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className='input-area'>
                                <input
                                    type="text"
                                    placeholder="  Write something..."
                                    value={content}
                                    required
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Loading...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
