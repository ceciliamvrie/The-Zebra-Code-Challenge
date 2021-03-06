import React from 'react'

// React unfortunately cannot import svgs from their relative paths like pngs or jpgs,
// so the best option was to import them as components instead

// I used an svg-loader for webpack and react to be able to import all svgs as urls

const FeaturesIcons = ({ features_icons = []}) => {
  return (
    <div>
        {
         features_icons.map(({ icon, name }) => {
            const Icon = require(`../../assets/${icon}.svg`)
            return <Icon key={name}/>
          })
        }
    </div>
  )
}

export default FeaturesIcons
