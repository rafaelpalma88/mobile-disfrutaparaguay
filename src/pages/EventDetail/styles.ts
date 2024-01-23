import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #121214;
  padding-top: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`

export const EventsList = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  padding-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;
`
// export const Container = styled.View`
//   display: flex;
//   background: #1f2729;
//   border-radius: 5px;
//   margin-top: 30px;
//   gap: 20px;
//   position: relative;
//   flex-direction: column;
//   padding: 15px;
// `
export const EventTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`

export const CustomText = styled.Text`
  color: white;
`
