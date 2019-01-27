const Revisions = `
  type RevisionStats {
    forked: Int
    incomplete: Int
  }
  type RevisionHeads {
    meta: RevisionStats
    heads: [PostMessage]
  }
`

module.exports = () => [Revisions]
