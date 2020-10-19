import React from 'react';
import { Button, Segment, Divider, Grid, Header, Loader, Image, Dimmer, Search, Icon } from 'semantic-ui-react';

function Content() {
    return (
        <div>
        <Segment placeholder style={{ marginTop: '10px' }}>
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>

                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='search' />
                            Cari Dokumen
                        </Header>
                        <Search placeholder='Search Document...' />
                    </Grid.Column>

                    <Grid.Column>
                        <Header icon>
                            <Icon name='file pdf outline' />
                            Tambah Dokumen Baru
                        </Header>
                        <Button primary>Create Document</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment>
            <Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>

            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
    </div>
)
}


export default Content;