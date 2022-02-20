export default function thanks(props) {

    console.log(props)

    return (
        <div>
            안녕하세요. 저는 탱크스 입니다.
        </div>
    )
}

thanks.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    console.log(data);

    return {
        posts: data
    }
}
