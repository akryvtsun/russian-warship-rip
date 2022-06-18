AppSettingsPage({

    build(props) {
        const addBTN = View(
            {
                style: {
                    fontSize: '12px',
                    lineHeight: '30px',
                    borderRadius: '30px',
                    background: '#409EFF',
                    color: 'white',
                    textAlign: 'center',
                    padding: '0 15px',
                    width: '30%',
                },
            },
            [
                TextInput({
                    label: 'addTodo',
                    onChange: (val) => {
                    },
                }),
            ],
        )
        return View(
            {
                style: {
                    padding: '12px 20px',
                },
            },
            [
                addBTN,
            ],
        )
    },
})