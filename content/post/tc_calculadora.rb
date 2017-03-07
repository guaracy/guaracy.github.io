require 'calculadora'

describe Player do
  describe '#score_goal' do
    it 'increments player goal tally by 1' do
      player = Player.new  
      player.score_goal
      expect(player.goals).to eq 1
    end  
  end
end
